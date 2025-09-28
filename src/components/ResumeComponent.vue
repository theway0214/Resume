<template>
  <div class="resume-wrapper">
    <!-- PDF导出按钮 -->
    <div class="export-controls">
      <button @click="exportToPDF" class="export-btn">
        <svg class="export-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <polyline
            points="14,2 14,8 20,8"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="16"
            y1="13"
            x2="8"
            y2="13"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="16"
            y1="17"
            x2="8"
            y2="17"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <polyline
            points="10,9 9,9 8,9"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        导出PDF
      </button>
    </div>

    <div class="resume-container">
      <!-- 头部信息 -->
      <div class="header">
        <!-- 左侧二维码 -->
        <div class="qr-code">
          <img class="img-style" src="@/assets/wx.png" alt="" />
        </div>

        <!-- 中间个人信息 -->
        <div class="personal-info">
          <h1 class="name">熊远强</h1>
          <div class="contact-details">
            <div class="contact-line">
              <span>13419496947 | 1678028821@qq.com | 重庆</span>
            </div>
            <div class="contact-line">
              <span>4年经验 | 二三维前端开发 | 男 | 27岁</span>
            </div>
          </div>
        </div>

        <!-- 右侧头像 -->
        <div class="avatar">
          <img class="img-style" src="@/assets/xyq.jpg" alt="" />
        </div>
      </div>

      <!-- 教育经历 -->
      <div class="section">
        <h2 class="section-title">教育经历</h2>
        <div class="education-item">
          <div class="education-content">
            <div class="school-name">重庆财经学院 全日制本科</div>
            <div class="major">空信工程 空间信息与数字技术</div>
          </div>
          <div class="education-period">2018.09 - 2022.06</div>
        </div>
      </div>

      <!-- 技术技能 -->
      <div class="section">
        <h2 class="section-title">技术技能</h2>
        <div class="skills-list">
          <div class="skill-item">
            • 前端基础：精通HTML5、CSS3及JavaScript
            (ES6+)，专注编写高质量、可维护的代码以提升开发效率。
          </div>
          <div class="skill-item">
            • Vue.js技术栈：深入掌握Vue
            2/3，拥有丰富的TypeScript项目实践经验，主导过多个中大型应用的架构设计与开发。
          </div>
          <div class="skill-item">
            •
            跨平台开发：熟练应用Uni-App进行多端开发（App、小程序、H5），精通性能优化及原生功能集成。
          </div>
          <div class="skill-item">
            • WebGIS开发：精通OpenLayers, Mapbox,
            Cesium等2D/3D地图引擎，了解Three.js，擅长构建复杂的GIS与数据可视化系统。
          </div>
          <div class="skill-item">
            •
            数据可视化：熟练运用ECharts等工具，将复杂数据转化为直观、易于理解的交互式图表，为业务决策提供数据支持。
          </div>
          <div class="skill-item">
            •
            前端工程化：掌握Webpack/Vite等构建工具及CI/CD流程，能够搭建并维护高效、稳定的自动化开发与部署流水线。
          </div>
          <div class="skill-item">
            • 团队与项目管理：具备技术领导力，能通过Code
            Review、技术分享等方式，有效提升团队整体技术水平与协作效率。
          </div>
          <div class="skill-item">
            •
            用户体验：持续关注Web性能与无障碍（Accessibility），致力于打造流畅、易用且符合W3C标准的现代化Web应用。
          </div>
        </div>
      </div>

      <!-- 工作经历 -->
      <div class="section">
        <h2 class="section-title">工作经历</h2>

        <!-- 重庆双高实业有限公司 -->
        <div class="work-experience">
          <div class="work-header">
            <div class="company-info">
              <h3 class="company-name">
                重庆智网科技产业发展有限公司信息通信分公司(重庆双高实业有限公司)
              </h3>
              <span class="work-period">2024.06 - 至今</span>
            </div>
            <div class="position">数据业务线 前端开发组长</div>
          </div>

          <div class="work-content">
            <div class="job-section">
              <h4>能源大数据平台</h4>
              <div class="project-overview">
                <h5>项目概述</h5>
                <p>
                  <strong>（S）情境：</strong>
                  为响应集团“能源一体化”战略，需构建一个集数据采集、监控、分析于一体的综合性数字化管理平台，以应对城市及园区日益复杂的能源管理需求。
                </p>
              </div>
              <div class="tech-stack">
                <h5>技术栈</h5>
                <p>
                  Vue 3, TypeScript, Vite, Pinia, Vue Router, Ant Design, ECharts, Three.js, SWRV,
                  UnoCSS, Less
                </p>
              </div>
              <div class="achievements">
                <h5>核心职责与成果</h5>
                <p>
                  <strong>（T）任务：</strong>
                  作为前端开发组长，全面负责平台前端架构设计、技术选型、核心模块开发及团队管理，确保项目高质量交付。
                </p>
                <p>
                  <strong>（A）行动：</strong>
                </p>
                <ul>
                  <li>
                    主导前端架构设计，采用Monorepo策略管理多个子应用（管理后台、城市大屏、园区大屏），实现了代码的高效复用与协同开发。
                  </li>
                  <li>
                    攻克复杂地理数据可视化难题，主导ECharts与思极地图的深度集成，设计并实现了一套可复用的可视化组件库。
                  </li>
                  <li>
                    针对大数据量渲染性能瓶颈，主导实施了代码分割、懒加载、虚拟滚动等一系列优化措施。
                  </li>
                  <li>
                    为保障系统安全性与稳定性，主导设计了前端权限路由体系与接口对接方案，确保了多角色业务场景下的数据安全隔离。
                  </li>
                  <li>
                    引入并推广SWRV进行状态管理，提升了数据请求的健壮性与用户体验；同时，通过精细的动效设计与高保真UI还原，提升了产品的整体质感。
                  </li>
                </ul>
                <p>
                  <strong>（R）成果：</strong>
                </p>
                <ul>
                  <li>
                    <strong>效率提升：</strong>
                    成功将团队开发效率<strong>提升了30%</strong>
                    ，显著缩短了新需求的交付周期。
                  </li>
                  <li>
                    <strong>性能优化：</strong>
                    首屏加载时间<strong>减少了50%</strong>
                    ，大幅提升了用户体验与系统流畅度。
                  </li>
                  <li>
                    <strong>业务支撑：</strong>
                    平台成功上线，稳定服务于数字化部、安监部、发展部等多个核心部门，为能源流向分析与业务决策提供了强有力的数字化支撑。
                  </li>
                  <li>
                    <strong>团队认可：</strong>
                    项目成果获得了产品与设计团队的高度评价，巩固了前端团队在公司内部的技术影响力。
                  </li>
                </ul>
              </div>
            </div>

            <div class="job-section">
              <h4>关键指标看板</h4>
              <div class="project-overview">
                <h5>项目概述</h5>
                <p>
                  <strong>（S）情境：</strong>
                  为满足公司高层对关键业务指标的实时监控需求，需紧急开发一个高度定制化的数据看板，以替代功能有限且数据更新不及时的旧系统。
                </p>
              </div>
              <div class="tech-stack">
                <h5>技术栈</h5>
                <p>Vue 3, TypeScript, ECharts, Ant Design</p>
              </div>
              <div class="achievements">
                <h5>核心职责与成果</h5>
                <p>
                  <strong>（T）任务：</strong>
                  独立负责整个项目的技术选型、架构设计与开发实施，确保在紧迫的时间内交付一个高性能、高可用的数据看板。
                </p>
                <p>
                  <strong>（A）行动：</strong>
                </p>
                <ul>
                  <li>
                    为实现复杂的流向与穿透动画效果，对ECharts进行了深度定制与二次封装，并结合Vue
                    3的组合式API，实现了动态、流畅的可视化交互。
                  </li>
                  <li>
                    针对大数据量下ECharts渲染性能问题，通过对数据进行分片与聚合，并利用节流和防抖技术优化图表重绘逻辑，有效提升了看板的响应速度。
                  </li>
                  <li>
                    为确保数据实时性，设计并实现了一套基于WebSocket的实时数据推送方案，保证了关键指标的秒级更新。
                  </li>
                  <li>
                    通过对看板布局和视觉元素的精细打磨，并与UI设计师紧密协作，确保了最终成品在视觉效果和用户体验上的高水准。
                  </li>
                </ul>
                <p>
                  <strong>（R）成果：</strong>
                </p>
                <ul>
                  <li>
                    <strong>项目交付：</strong>
                    在<strong>1个月</strong>内成功交付项目，获得了公司领导的高度评价与认可。
                  </li>
                  <li>
                    <strong>性能表现：</strong>
                    看板实现了数据秒级刷新，复杂动画效果下依然保持流畅运行，为高层决策提供了实时、可靠的数据支持。
                  </li>
                  <li>
                    <strong>技术沉淀：</strong>
                    项目中积累的ECharts深度定制与性能优化经验，被后续多个项目复用，提升了团队整体的可视化开发能力。
                  </li>
                </ul>
              </div>
            </div>

            <div class="job-section">
              <h4>数据底座</h4>
              <div class="project-overview">
                <h5>项目概述</h5>
                <p>
                  <strong>（S）情境：</strong>
                  为构建统一、高效的数据中台，需要一个强大的数据底座项目来适配数据的接入、处理、分析与可视化，并对整个系统的安全性提出极高要求。
                </p>
              </div>
              <div class="tech-stack">
                <h5>技术栈</h5>
                <p>Vue 3, TypeScript, Ant Design, Pinia</p>
              </div>
              <div class="achievements">
                <h5>核心职责与成果</h5>
                <p>
                  <strong>（T）任务：</strong>
                  主导系统安全架构的设计与实现，构建一个覆盖系统级到业务级的全方位、多层次安全防护体系。
                </p>
                <p>
                  <strong>（A）行动：</strong>
                </p>
                <ul>
                  <li>设计并实现了用户敏感操作的二次鉴权机制，有效防止了误操作与恶意操作风险。</li>
                  <li>
                    构建了细粒度的角色权限分配（RBAC）模型，确保不同角色的用户只能访问其授权范围内的数据与功能。
                  </li>
                  <li>
                    建立了完善的安全审计日志与异常告警系统，实现了对所有安全事件的可追溯与实时响应。
                  </li>
                  <li>
                    主导了核心数据的加密存储与定期备份策略的制定与执行，保障了数据的机密性与完整性。
                  </li>
                </ul>
                <p>
                  <strong>（R）成果：</strong>
                </p>
                <ul>
                  <li>
                    <strong>安全体系构建：</strong>
                    成功构建了一个纵深防御的安全体系，有效保障了数据资产在全生命周期内的安全。
                  </li>
                  <li>
                    <strong>风险控制：</strong>
                    系统上线至今未发生任何由权限漏洞或数据泄露导致的安全事故，为上层数据应用提供了坚实、可靠的安全环境。
                  </li>
                  <li>
                    <strong>合规性：</strong>
                    安全方案的设计满足了行业数据安全与隐私保护的相关合规要求，为项目的顺利验收提供了有力保障。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 重庆博创宏图科技有限公司 -->
        <div class="work-experience">
          <div class="work-header">
            <div class="company-info">
              <h3 class="company-name">重庆博创宏图科技有限公司</h3>
              <span class="work-period">2022.05 - 2024.03</span>
            </div>
            <div class="position">前端开发工程师 | GIS开发工程师</div>
          </div>

          <div class="work-content">
            <div class="job-section">
              <h4>智慧乡村</h4>
              <div class="project-overview">
                <h5>项目概述</h5>
                <p>
                  <strong>（S）情境：</strong>
                  为响应国家振兴战略，需为地方政府打造一个集乡村治理、产业发展、民生服务于一体的综合性数字化管理平台。
                </p>
              </div>
              <div class="tech-stack">
                <h5>技术栈</h5>
                <p>Monorepo, Vue 3, Mapbox-gl-js, xgplayer-flv.js, ECharts, ElementPlus</p>
              </div>
              <div class="achievements">
                <h5>核心职责与成果</h5>
                <p>
                  <strong>（T）任务：</strong>
                  负责平台前端的整体开发，包括管理后台、数据大屏及移动H5端，重点攻克物联网（IoT）设备接入、视频流集成与GIS功能开发等技术难题。
                </p>
                <p>
                  <strong>（A）行动：</strong>
                </p>
                <ul>
                  <li>
                    采用Monorepo架构统一管理PC端与移动端项目，实现了多端代码的逻辑复用与高效协同。
                  </li>
                  <li>
                    通过集成MQTT协议，实现了与各类物联网（环境监测、安防）设备的实时数据对接；并利用
                    <code>xgplayer-flv.js</code> 实现了低延迟的视频监控流播放。
                  </li>
                  <li>
                    基于 <code>Mapbox-gl-js</code>
                    开发了丰富的GIS功能，包括乡村资源的可视化标注、空间查询与动态渲染，为网格化管理提供了直观的地理信息支持。
                  </li>
                  <li>
                    使用 <code>Taro</code> 结合 <code>Vue 3</code>
                    开发跨平台移动应用，一次编码即可适配微信小程序与H5，大幅提升了开发效率。
                  </li>
                  <li>
                    负责数据可视化大屏的设计与开发，将乡村各项核心指标（如人口、产业、环境）进行动态、直观的展示。
                  </li>
                </ul>
                <p>
                  <strong>（R）成果：</strong>
                </p>
                <ul>
                  <li>
                    <strong>平台上线：</strong>
                    项目成功在多个示范村镇落地应用，获得了地方政府客户的高度认可。
                  </li>
                  <li>
                    <strong>治理增效：</strong>
                    实时物联感知与视频监控能力，使乡村安全与环境事件的响应处置效率<strong>提升了40%</strong>。
                  </li>
                  <li>
                    <strong>技术创新：</strong>
                    GIS与数据可视化的深度融合，为乡村精细化管理与科学决策提供了创新的数字化工具。
                  </li>
                </ul>
              </div>

              <div class="job-section">
                <h4>征地拆迁系统</h4>
                <div class="project-overview">
                  <h5>项目概述</h5>
                  <p>
                    （S）情境：
                    传统的征地拆迁工作流程繁琐、效率低下且易出错，急需一个数字化、一体化的管理系统来提升工作效率与数据准确性。
                  </p>
                </div>
                <div class="tech-stack">
                  <h5>技术栈</h5>
                  <p>PC端: Vue 2, Element UI, ECharts | 移动端: Uni-app (Vue 2), uView</p>
                </div>
                <div class="achievements">
                  <h5>核心职责与成果</h5>
                  <p>
                    <strong>（T）任务：</strong>
                    作为前端负责人，主导开发一套覆盖“入户、算量、签约、交付”全流程的征地拆迁管理解决方案，包括PC管理后台与移动端数据采集工具。
                  </p>
                  <p>
                    <strong>（A）行动：</strong>
                  </p>
                  <ul>
                    <li>
                      基于 <code>Uni-app</code> 结合 <code>Vue 2</code>
                      开发了跨平台移动端应用，实现了调查数据的离线采集与在线同步，并支持身份证、银行卡等信息的快速识别。
                    </li>
                    <li>
                      在PC端，使用 <code>Vue 2</code> 与 <code>Element UI</code>
                      构建了功能强大的管理后台，涵盖了户情管理、补偿款自动算量、合同生成与打印等核心模块。
                    </li>
                    <li>
                      为应对复杂的调查问卷，设计并实现了一个动态表单生成器，允许业务人员通过拖拽方式灵活配置表单，大幅提升了系统的适应性。
                    </li>
                    <li>
                      集成GIS功能，实现了地块与房屋信息的地图可视化，为拆迁规划与进度监控提供了直观的决策支持。
                    </li>
                  </ul>
                  <p>
                    <strong>（R）成果：</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>效率革命：</strong>
                      数据采集与处理效率<strong>提升了超过70%</strong>
                      ，人工录入错误率<strong>降低了90%</strong>以上。
                    </li>
                    <li>
                      <strong>项目加速：</strong>
                      数字化流程使拆迁项目周期平均<strong>缩短了30%</strong>，加快了资金的周转与项目的推进。
                    </li>
                    <li>
                      <strong>市场验证：</strong>
                      系统在多个大型拆迁项目中成功应用，管理资金规模达数亿元，获得了客户的一致好评，并成为公司的标杆产品。
                    </li>
                  </ul>
                </div>
              </div>

              <div class="job-section">
                <h4>长寿管网项目</h4>
                <div class="project-overview">
                  <h5>项目概述</h5>
                  <p>
                    <strong>（S）情境：</strong>
                    长寿区地下管网系统庞大复杂，传统的人工管理方式已无法满足日益增长的精细化、智慧化运维需求，急需一套数字化的管网管理与可视化系统。
                  </p>
                </div>
                <div class="tech-stack">
                  <h5>技术栈</h5>
                  <p>Vue 2, Element UI, OpenLayers, ECharts</p>
                </div>
                <div class="achievements">
                  <h5>核心职责与成果</h5>
                  <p>
                    <strong>（T）任务：</strong>
                    负责项目的整体前端开发，包括后台管理系统、数据可视化大屏以及核心的GIS管网功能，旨在为管网的规划、运维、应急处置提供全方位的数字化支持。
                  </p>
                  <p>
                    <strong>（A）行动：</strong>
                  </p>
                  <ul>
                    <li>
                      主导开发了后台管理系统，实现了对管网资产、巡检维修、应急预案等信息的全生命周期管理。
                    </li>
                    <li>
                      基于 <code>OpenLayers</code>
                      开发了专业的二维GIS功能，包括管网数据的加载、查询、空间分析（如爆管分析），并实现了与业务数据的深度联动。
                    </li>
                    <li>
                      设计并开发了数据可视化大屏，通过 <code>ECharts</code>
                      将管网的运行状态、告警信息、巡检动态等关键指标进行实时、直观的展示。
                    </li>
                    <li>
                      为提升系统的可用性，对GIS地图的交互体验进行了大量优化，如自定义地图样式、提升大数据量下的渲染性能等。
                    </li>
                  </ul>
                  <p>
                    <strong>（R）成果：</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>管理升级：</strong>
                      系统上线后，管网数据实现了统一、动态管理，数据准确性<strong>提升了95%</strong>以上。
                    </li>
                    <li>
                      <strong>决策支持：</strong>
                      GIS与数据可视化的结合，为管网规划与应急决策提供了科学依据，应急响应时间平均<strong>缩短了50%</strong>。
                    </li>
                    <li>
                      <strong>行业标杆：</strong>
                      该项目作为智慧管网的成功案例，获得了业主的积极评价，并吸引了多个同类城市的考察与学习。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 重庆励祺科技有限公司 -->
          <div class="work-experience">
            <div class="work-header">
              <div class="company-info">
                <h3 class="company-name">重庆励祺科技有限公司</h3>
                <span class="work-period">2021.05 - 2022.03</span>
              </div>
              <div class="position">前端开发工程师</div>
            </div>

            <div class="work-content">
              <div class="job-section">
                <h4>荣昌综治项目</h4>
                <div class="project-overview">
                  <h5>项目概述</h5>
                  <p>
                    <strong>（S）情境：</strong>
                    为推进市域社会治理现代化，荣昌区急需一个集事件管理、网格化治理、大数据分析于一体的综合指挥平台，以提升社会治理的精细化与智能化水平。
                  </p>
                </div>
                <div class="tech-stack">
                  <h5>技术栈</h5>
                  <p>Vue 2, Element UI, OpenLayers, ECharts, WebSocket</p>
                </div>
                <div class="achievements">
                  <h5>核心职责与成果</h5>
                  <p>
                    <strong>（T）任务：</strong>
                    作为前端核心开发，负责平台前端的整体架构与开发，重点围绕事件流转、GIS网格化管理、数据可视化和实时通讯等功能进行攻关。
                  </p>
                  <p>
                    <strong>（A）行动：</strong>
                  </p>
                  <ul>
                    <li>
                      设计并实现了覆盖“上报-受理-流转-处置-反馈”的闭环事件管理流程，并引入WebSocket实现了事件状态的实时更新与消息推送。
                    </li>
                    <li>
                      基于 <code>OpenLayers</code>
                      构建了强大的GIS网格化管理功能，支持对人、地、事、物、组织等治理要素的精准落图与空间分析。
                    </li>
                    <li>
                      开发了多维度的数据分析看板，通过 <code>ECharts</code>
                      对社会治理的关键指标进行可视化呈现，为领导决策提供了数据支持。
                    </li>
                    <li>
                      为提升系统的易用性，对表单、表格、流程图等核心组件进行了封装与优化，并主导了前端代码的规范化与模块化建设。
                    </li>
                  </ul>
                  <p>
                    <strong>（R）成果：</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>治理效能提升：</strong>
                      平台上线后，跨部门事件协同处置效率<strong>提升了60%</strong>
                      ，平均处置周期<strong>缩短了40%</strong>。
                    </li>
                    <li>
                      <strong>决策智能化：</strong>
                      大数据分析看板帮助管理者精准识别社会治理的薄弱环节，实现了由“经验治理”向“数据治理”的转变。
                    </li>
                    <li>
                      <strong>用户体验优化：</strong>
                      通过对工作台的个性化定制与常用功能的聚合，大幅提升了一线网格员的工作效率与系统满意度。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 自我评价 -->
        <div class="section">
          <h2 class="section-title">自我评价</h2>
          <div class="evaluation">
            <div class="evaluation-item">
              <p>
                • 前端架构与工程化：精通 Vue 技术栈与大型项目架构，从 0 到 1
                搭建项目与规范落地，显著提升代码质量与研发效率。
              </p>
            </div>
            <div class="evaluation-item">
              <p>
                •
                业务理解与方案落地：深度参与能源、政务、交通等行业，能快速拆解复杂需求并转化为可实施方案，保障交付与可维护性。
              </p>
            </div>
            <div class="evaluation-item">
              <p>
                •
                沟通协作与项目统筹：与产品、设计、后端高效协同，具备负责人统筹能力，推进里程碑与风险管控，按期高质量交付。
              </p>
            </div>
            <div class="evaluation-item">
              <p>
                • 学习迭代与技术沉淀：持续跟进可视化与 GIS
                等新技术，形成可复用组件与最佳实践，促进团队知识沉淀与持续迭代。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

// PDF导出功能
const exportToPDF = async () => {
  try {
    // 显示加载状态
    const exportBtn = document.querySelector('.export-btn') as HTMLElement
    const originalText = exportBtn.innerHTML
    exportBtn.innerHTML = '<span>导出中...</span>'
    exportBtn.style.pointerEvents = 'none'

    // 获取简历容器
    const resumeContainer = document.querySelector('.resume-container') as HTMLElement
    if (!resumeContainer) {
      throw new Error('未找到简历容器')
    }

    // 添加PDF导出模式样式
    resumeContainer.classList.add('pdf-export-mode')

    // 等待样式应用
    await new Promise((resolve) => setTimeout(resolve, 100))

    // 获取容器的实际尺寸
    const containerRect = resumeContainer.getBoundingClientRect()
    const containerHeight = resumeContainer.scrollHeight

    // A4纸张尺寸 (210mm x 297mm)，转换为像素 (72 DPI)
    const a4Width = 595.28 // A4宽度（点）
    const a4Height = 841.89 // A4高度（点）

    // 计算缩放比例
    const scale = 2 // 提高分辨率
    const canvasWidth = a4Width * scale
    const canvasHeight = Math.max(containerHeight * scale, a4Height * scale)

    // 使用html2canvas截图
    const canvas = await html2canvas(resumeContainer, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: containerRect.width,
      height: containerHeight,
      scrollX: 0,
      scrollY: 0,
      windowWidth: containerRect.width,
      windowHeight: containerHeight,
      onclone: (clonedDoc) => {
        // 确保克隆的文档中也应用了PDF导出样式
        const clonedContainer = clonedDoc.querySelector('.resume-container')
        if (clonedContainer) {
          clonedContainer.classList.add('pdf-export-mode')
        }
      },
    })

    // 创建PDF文档
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
      compress: false, // 不压缩，保持原始质量
    })

    // 计算图片在PDF中的尺寸 - 保持原始比例，不压缩
    const margin = 20 // 页面边距
    const availableWidth = a4Width - margin * 2
    const availableHeight = a4Height - margin * 2

    // 计算缩放比例，确保宽度适合页面
    const scaleRatio = availableWidth / canvas.width
    const scaledWidth = canvas.width * scaleRatio
    const scaledHeight = canvas.height * scaleRatio

    // 如果内容高度超过一页，进行分页
    if (scaledHeight <= availableHeight) {
      // 内容适合一页，直接添加
      pdf.addImage(
        canvas.toDataURL('image/png', 1.0), // 使用PNG格式，质量设为最高
        'PNG',
        margin,
        margin,
        scaledWidth,
        scaledHeight,
      )
    } else {
      // 需要分页处理 - 按实际内容高度分页
      const pageContentHeight = availableHeight // 每页可用内容高度
      const sourcePageHeight = pageContentHeight / scaleRatio // 对应的源图片高度

      let currentY = 0 // 当前处理的Y位置
      let pageIndex = 0

      while (currentY < canvas.height) {
        if (pageIndex > 0) {
          pdf.addPage()
        }

        // 计算当前页面要截取的高度
        const remainingHeight = canvas.height - currentY
        const currentPageHeight = Math.min(sourcePageHeight, remainingHeight)

        // 创建临时canvas来裁剪当前页面内容
        const tempCanvas = document.createElement('canvas')
        const tempCtx = tempCanvas.getContext('2d')!

        tempCanvas.width = canvas.width
        tempCanvas.height = currentPageHeight

        // 绘制当前页面的内容
        tempCtx.drawImage(
          canvas,
          0,
          currentY,
          canvas.width,
          currentPageHeight, // 源区域
          0,
          0,
          canvas.width,
          currentPageHeight, // 目标区域
        )

        // 计算在PDF中的实际高度
        const pdfPageHeight = currentPageHeight * scaleRatio

        // 添加到PDF，保持原始质量
        pdf.addImage(
          tempCanvas.toDataURL('image/png', 1.0),
          'PNG',
          margin,
          margin,
          scaledWidth,
          pdfPageHeight,
        )

        // 移动到下一页的起始位置
        currentY += currentPageHeight
        pageIndex++

        // 防止无限循环
        if (pageIndex > 20) {
          console.warn('PDF分页超过20页，停止处理')
          break
        }
      }
    }

    // 保存PDF
    const fileName = `熊远强-前端开发工程师-简历-${new Date().toLocaleDateString('zh-CN').replace(/\//g, '')}.pdf`
    pdf.save(fileName)

    // 移除PDF导出模式样式
    resumeContainer.classList.remove('pdf-export-mode')

    // 恢复按钮状态
    exportBtn.innerHTML = originalText
    exportBtn.style.pointerEvents = 'auto'

    console.log('PDF导出成功')
  } catch (error) {
    console.error('PDF导出失败:', error)

    // 恢复按钮状态
    const exportBtn = document.querySelector('.export-btn') as HTMLElement
    if (exportBtn) {
      exportBtn.innerHTML = `
        <svg class="export-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        导出PDF
      `
      exportBtn.style.pointerEvents = 'auto'
    }

    // 移除PDF导出模式样式
    const resumeContainer = document.querySelector('.resume-container') as HTMLElement
    if (resumeContainer) {
      resumeContainer.classList.remove('pdf-export-mode')
    }

    alert('PDF导出失败，请重试')
  }
}
</script>

<style scoped>
/* 导出控制按钮样式 */
.resume-wrapper {
  position: relative;
  width: 100%;
}

.export-controls {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.export-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.export-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
}

.export-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
}

.export-icon {
  width: 18px;
  height: 18px;
  stroke-width: 2;
}

/* 打印时隐藏导出按钮 */
@media print {
  .export-controls {
    display: none !important;
  }
}

/* PDF导出模式时隐藏导出按钮 */
.pdf-export-mode .export-controls {
  display: none !important;
}

.resume-container {
  width: 210mm;
  max-width: 210mm;
  margin: 0 auto;
  padding: 20mm;
  background: white;
  font-family:
    'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', Arial, sans-serif;
  line-height: 1.6;
  color: #222;
  box-sizing: border-box;
  font-size: 13px;
}

/* 头部样式 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.qr-code {
  flex-shrink: 0;
}

.personal-info {
  flex: 1;
  text-align: center;
  margin: 0 20px;
}

.name {
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 10px 0;
  letter-spacing: 8px;
}

.contact-details {
  font-size: 12px;
  line-height: 1.4;
}

.contact-line {
  margin: 5px 0;
}

.avatar {
  flex-shrink: 0;
}

/* 章节样式 */
.section {
  margin-bottom: 25px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  color: #000;
  border-bottom: 1px solid #000;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

/* 教育经历样式 */
.education-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 10px;
}

.education-period {
  font-weight: bold;
  min-width: 120px;
  flex-shrink: 0;
}

.education-content {
  flex: 1;
}

.school-name {
  font-weight: bold;
  margin-bottom: 2px;
}

.major {
  color: #666;
  font-size: 11px;
}

/* 技能部分样式 */
.skills-list {
  line-height: 1.6;
}

.skill-item {
  margin-bottom: 8px;
  text-align: justify;
  font-size: 12px;
}

/* 工作经历样式 */
.work-experience {
  margin-bottom: 25px;
}

.work-header {
  margin-bottom: 15px;
}

.company-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.company-name {
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  color: #111;
}

.work-period {
  background: #333;
  color: white;
  padding: 3px 8px;
  font-size: 10px;
  font-weight: normal;
  border-radius: 4px;
  font-variant-numeric: tabular-nums;
}

.position {
  font-size: 12px;
  color: #444;
  font-weight: 600;
}

.work-content {
  margin-top: 10px;
}

.job-section {
  margin-bottom: 16px;
}

.job-section h4 {
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #111;
}

/* 小标题统一样式 */
.job-section h5 {
  font-size: 12.5px;
  font-weight: 600;
  color: #111;
  margin: 6px 0 6px 0;
  border-left: 2px solid #444;
  padding-left: 8px;
}

/* 段落与列表排版优化 */
.job-section p {
  margin: 6px 0;
  font-size: 13px;
  text-align: justify;
  line-height: 1.6;
}

.job-section ul {
  margin: 6px 0 10px 18px;
  padding-left: 0;
  list-style: disc;
}

.job-section li {
  margin: 4px 0;
  color: #222;
}

/* 子模块之间的间距 */
.project-overview,
.tech-stack,
.achievements {
  margin-bottom: 10px;
}

/* 避免分页时断裂（屏幕与导出通用） */
.work-experience,
.work-header,
.work-content,
.job-section {
  break-inside: avoid;
}

/* 打印和PDF导出样式优化 */
@media print {
  .resume-container {
    width: 210mm;
    max-width: none;
    margin: 0;
    padding: 15mm;
    box-shadow: none;
    font-family: 'SimSun', 'Songti SC', 'Noto Serif SC', serif;
    font-size: 12pt; /* 使用更适合打印的字号 */
    line-height: 1.6;
  }

  .section {
    margin-bottom: 20px;
    page-break-inside: avoid;
  }

  .work-experience {
    margin-bottom: 18px;
    padding: 8px 0;
    page-break-inside: avoid;
  }

  .job-section,
  .work-header,
  .work-content {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* 打印时避免深色背景，提升清晰度 */
  .work-period {
    background: none !important;
    color: #000 !important;
    border: 1px solid #333;
    padding: 2px 6px;
  }

  /* 列表缩进与可读性 */
  .job-section ul {
    margin-left: 18px;
  }
}

/* PDF导出模式下的打印友好样式（与print对齐） */
.pdf-export-mode .resume-container {
  padding: 15mm;
  font-family: 'SimSun', 'Songti SC', 'Noto Serif SC', serif;
  font-size: 13px;
}

.pdf-export-mode .work-period {
  background: none !important;
  color: #000 !important;
  border: 1px solid #333;
  padding: 2px 6px;
}

.pdf-export-mode .job-section,
.pdf-export-mode .work-header,
.pdf-export-mode .work-content {
  break-inside: avoid;
}

.pdf-export-mode .project-overview h5,
.pdf-export-mode .tech-stack h5,
.pdf-export-mode .achievements h5 {
  font-size: 12px;
  font-weight: bold;
  margin: 0 0 4px 0;
  color: #555;
  padding-bottom: 1px;
}

.pdf-export-mode .project-overview p,
.pdf-export-mode .tech-stack p,
.pdf-export-mode .achievements p {
  margin: 2px 0;
  font-size: 11px;
  text-align: justify;
  line-height: 1.3;
}

.pdf-export-mode .img-style {
  width: 80px;
  height: 80px;
}

/* 强制分页控制 */
.pdf-export-mode .page-break-before {
  page-break-before: always !important;
}

.pdf-export-mode .page-break-after {
  page-break-after: always !important;
}

.pdf-export-mode .no-page-break {
  page-break-inside: avoid !important;
}

/* 确保表格和列表不被分割 */
.pdf-export-mode table,
.pdf-export-mode ul,
.pdf-export-mode ol,
.pdf-export-mode .work-experience,
.pdf-export-mode .education-item,
.pdf-export-mode .project-overview,
.pdf-export-mode .tech-stack,
.pdf-export-mode .achievements {
  page-break-inside: avoid !important;
}

/* 标题后不分页 */
.pdf-export-mode h1,
.pdf-export-mode h2,
.pdf-export-mode h3,
.pdf-export-mode h4,
.pdf-export-mode h5,
.pdf-export-mode h6 {
  page-break-after: avoid !important;
}

/* 避免孤立行 */
.pdf-export-mode p {
  orphans: 2 !important;
  widows: 2 !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .resume-container {
    padding: 15px;
    font-size: 11px;
  }

  .header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .personal-info {
    margin: 0;
  }

  .name {
    font-size: 24px;
    letter-spacing: 4px;
  }

  .company-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .education-item {
    flex-direction: column;
    gap: 5px;
  }

  .education-period {
    min-width: auto;
  }
}

/* 项目详情样式 */
.project-overview,
.tech-stack,
.achievements {
  margin-bottom: 12px;
}

.project-overview h5,
.tech-stack h5,
.achievements h5 {
  font-size: 13px;
  font-weight: bold;
  margin: 0 0 5px 0;
  color: #555;
  padding-bottom: 2px;
}

.project-overview p,
.tech-stack p,
.achievements p {
  margin: 3px 0;
  font-size: 12px;
  text-align: justify;
  line-height: 1.4;
}

.img-style {
  width: 100px;
  height: 100px;
}
</style>
