import React from 'react'
import {Timeline, TimelineEvent} from 'react-event-timeline'

function TimeLine() {
  return (
    <div>
            <Timeline
            lineColor='#005EB8'
            >
            <TimelineEvent title="it takes from 2 weeks to"
                           createdAt="Planning"
                           icon={<i className="material-icons md-18">1</i>}
                           iconColor='#005EB8'
                        >
                <ul>
                    <li>Document key business processes and how they’re covered with existing software</li>
                    <li>Elicit business needs and concerns</li>
                    <li>Evaluate risks of new software introduction, e.g., impact on business processes, and plan risk mitigation measures.</li>
                    <li>Draw up high-level functional and technical software requirements.</li>
                    <li>Draw up a project roadmap and major milestones</li>
                    <li>Draw up a project roadmap and major milestones.</li>
                    <li>Conduct competition analysis (competitors’ product features, pricing & monetization models, customer feedback analysis, customer acquisition strategy analysis, product efficiencies and drawbacks).</li>
                    <li>Elicit business needs and concerns</li>
                    {/* <li>Elicit business needs and concerns</li>
                    <li>Elicit business needs and concerns</li>
                    <li>Elicit business needs and concerns</li>
                    <li>Elicit business needs and concerns</li> */}
                </ul>
            </TimelineEvent>
            <TimelineEvent
                // title="You sent an email to John Doe"
                createdAt="Architecture UI and Ux"
                icon={<i className="material-icons md-18">2</i>}
                iconColor='#005EB8'
            >
                Like  <ul>
                    <li>Document key business processes and how they’re covered with existing software</li>
                    <li>Elicit business needs and concerns</li>
                    <li>Evaluate risks of new software introduction, e.g., impact on business processes, and plan risk mitigation measures.</li>
                    <li>Draw up high-level functional and technical software requirements.</li>
                    <li>Draw up a project roadmap and major milestones</li>
                    <li>Draw up a project roadmap and major milestones.</li>
                    <li>Conduct competition analysis (competitors’ product features, pricing & monetization models, customer feedback analysis, customer acquisition strategy analysis, product efficiencies and drawbacks).</li>
                    <li>Elicit business needs and concerns</li>
                    {/* <li>Elicit business needs and concerns</li>
                    <li>Elicit business needs and concerns</li>
                    <li>Elicit business needs and concerns</li>
                    <li>Elicit business needs and concerns</li> */}
                </ul>
            </TimelineEvent>
    </Timeline>,
    </div>
  )
}

export default TimeLine