export class MyPromise {
  state: 'pending' | 'fulfilled' | 'rejected' = 'pending'
  value: unknown
  reason?: any
  onFulfilledCallBacks: (() => unknown)[] = []
  onRejectedCallBacks: (() => unknown)[] = []
  constructor(executor: (resolve: (value: unknown) => void, reject: (reason: any) => void) => void){
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined

    
    const resolve = (value:any) => {
      if(this.state === 'pending'){
        // 检查 value 是否是一个 thenable (Promise-like 对象)
        if(value !== null && (typeof value === 'object' || typeof value === 'function') && typeof value.then === 'function'){
          // 如果是 thenable，等待其解决
          value.then(resolve, reject)
          return
        }
        
        this.state = 'fulfilled'
        this.value = value
        this.onFulfilledCallBacks.forEach(fn => {
          fn()
        })
      }
    }

    const reject = (reason: any) => {
      if(this.state === 'pending'){
        this.state = 'rejected'
        this.reason = reason
        this.onRejectedCallBacks.forEach(fn=>fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  private resolvePromise(newPromise: MyPromise, x: unknown, resolve: (value: unknown) => void, reject: (reason: any) => void) {
    if(newPromise === x){
      return reject(new TypeError('循环引用'))
    }

    if(x !== null && (typeof x === 'object' || typeof x === 'function')){
      let called = false
      try {
        const then = (x as any).then
        if(typeof then === 'function'){
          then.call(x, (y: unknown) => {
            if(called){
              return
            }
            called = true
            this.resolvePromise(newPromise, y, resolve, reject)
          }, (r: any) => {
            if(called){
              return
            }
            called = true
            reject(r)
          })
        }else{
          resolve(x)
        }
      } catch (error) {
        if(called){
          return
        }
        called = true
        reject(error)
      }
    }else{
      resolve(x)
    }
  }

  then(onFulfilled?: (value: unknown) => unknown, onRejected?: (reason: any) => unknown) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v: unknown) => v
    onRejected = typeof onRejected === 'function' ? onRejected : (r: any) => { throw r }

    const newPromise = new MyPromise((resolve, reject) => {
      if(this.state === 'fulfilled'){
        setTimeout(() => {
          try {
            const x = onFulfilled!(this.value)
            this.resolvePromise(newPromise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if(this.state === 'rejected'){
        setTimeout(() => {
          try {
            const x = onRejected!(this.reason)
            this.resolvePromise(newPromise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if(this.state === 'pending'){
        this.onFulfilledCallBacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled!(this.value)
              this.resolvePromise(newPromise,x,resolve,reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
        this.onRejectedCallBacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected!(this.reason)
              this.resolvePromise(newPromise, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })

    return newPromise
  }
  
}
