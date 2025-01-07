---

order: 1
---

# Performance Management

Traditional performance reviews are often used to solve three key problems: talent mapping, leveling/compensation, and providing feedback for personal development. However, when these different objectives are combined into a single process, they can interfere with each other and reduce the effectiveness of the review system.

Our recommendation is to split the performance review process into two distinct tracks:

1. **Talent Mapping and Leveling**: Managers and skip-level managers are responsible for assessing employee performance, identifying top talent and development needs, and making decisions around compensation and promotions. This process should be grounded in the role expectations from the leveling framework. \

2. **Expectation Setting and Feedback**: A separate 360-degree feedback process, focused solely on providing employees with constructive, actionable insights to support their personal and professional growth. This feedback is not directly tied to compensation or promotion decisions however it may be used as one of the inputs in the leveling process.


## Talent Mapping

Talent mapping is an important exercise for building hiring plans, succession planning, and generally ensuring you are building a high-performance organization.

The process outlined here is intended to be internal to a management team, to guide their work. Employee focused feedback is delivered through a separate, but related, process.

1. **Level-Based Assessment**
    1. **Assess Level Alignment**: The manager reviews each team member's performance against the expectations defined in the leveling framework. This involves determining if the individual is meeting, exceeding, or falling short of the expectations for their current level.
    2. **Use Objective Observations and Data**: Assessments should be grounded in specific, observable behaviors or quantitative data. Examples include delivery on project milestones, quality of code, or contribution to team objectives. This ensures assessments are fair and minimizes bias based on subjective impressions.
    3. **Document Strengths and Development Needs**: For each team member, summarize key strengths and any areas requiring growth. Focus on actionable areas, such as skill gaps, leadership potential, or collaboration.
2. **Engage a Thought Partner**
    4. **Identify a Thought Partner**: Choose a thought partner who can provide an unbiased perspective, such as the manager’s own manager, a founder, CTO, or HR representative. This partner should have enough context to understand the team’s expectations and structure.
    5. **Pressure-Test the Assessment**: Review each assessment together, questioning areas where the manager may lack confidence. Discuss whether there’s enough supporting data to justify the ratings and if the assessment aligns with team goals and organizational standards.
    6. **Determine Additional Data Needs**: If either party feels an assessment lacks sufficient evidence, define what additional data would add confidence. This may include informal conversations with others who’ve worked closely with the employee, or a deeper look at past deliverables or performance trends.
    7. **Refine Assessments**: Based on the discussion, adjust the assessments as needed to ensure they’re both accurate and comprehensive.
3. **Finalize Plan**
    8. **Level changes & promotions:** The output of this process is a set of recommended level changes. The actual execution of level changes will be company and context dependent, and may not always be immediate. For example, some companies may have “promo-budgets” or need to align promotions with other business processes. However, even if you aren’t immediately making formal level changes, it is still a useful exercise to regularly perform this talent mapping process and keep track of folks who are misleveled.
    9. **Coaching Plan**: Using the refined assessments, the manager should identify a coaching plan for each team member. Identify areas where they need support, suggested actions they should take, and opportunities that they should be given. Again, this can be done independently of formal level changes, for example, an over-performing Senior engineer could be guided to set stretch goals related to the Principal level.


## The Feedback Cycle

Companies should tune the feedback process to their specific needs and values. A basic feedback process is outlined as follows:


### Expectation Setting

At the start of the review period (this could be a quarter or a half-year) each engineer collaborates with their manager to define 3-5 key expectations that align with their role and their team’s objectives.

Expectations should generally not be stretches, but observable actions that feel attainable, given the right circumstances. They may be set to remedy areas where the engineer is not meeting the requirements of their role, to demonstrate evidence of requirements of the next level, or to ensure the team hits their OKRs. They may also stem from personal interests like a desire to expand engineering knowledge or partner more closely with other functions.. 

Expectations should be aligned with the engineer’s level but do not need to encompass the full spectrum of level requirements. They should focus on things that the engineer needs to do and how they want to grow.

At the junior levels, expectations may be very explicit and activity oriented, for example, “maintain a steady frequency of code commits” or “participate in on-call rotations”.

At the senior levels, expectations become more outcome oriented, focusing on deliverables and results, for example “have a proposal for a new system accepted for implementation that streamlines the invoicing process by reducing manual effort by 20%” or “reduce 99th percentile API latency to within published SLAs”.

At the higher level, expectations will often be tightly coupled to team and company objectives. Because if they aren’t, the work you are doing is not aligned with what the company needs.

Expectations should remain fixed throughout the review period, even as circumstances evolve. While some may become obsolete or unattainable due to changing business needs or external factors, maintaining stable expectations provides a clearer basis for reflection and learning. Rather than adjusting targets mid-cycle, use the end-of-period review to discuss how changes impacted goals and what that teaches us about setting future expectations.

Expectations should be jointly crafted by the manager and the engineer based on real upcoming projects and opportunities. For example, if no junior developers are on the team or will be hired near term, a mentorship goal would be unreasonable. The manager should feel comfortable advocating for the individual to be a part of the necessary projects to meet their expectations. If the manager feels uncomfortable with the expectations the individual would like to set, there is likely a need for further feedback and alignment on level and growth areas—the engineer cannot set appropriate goals if they do not understand their current state accurately.


#### Key steps

Once high-level expectations have been aligned upon, the engineer and manager should then outline the key steps needed to ensure that the expectation is met. These key steps will be very tactical and will form a check-list or roadmap for the engineer that helps them keep on track. 

Think of the key steps as a game plan for achieving expectations. For junior engineers, identifying key steps will be a collaborative process, potentially lasting multiple 1:1s. For more senior engineers, they should be able to identify key steps on their own and leverage the manager for reviewing. 


#### Example expectations

**Junior Engineer**

    Expectation: "Develop proficiency in the team's testing practices by
    maintaining 80%+ test coverage for new code"

    Key Steps:

    1. Shadow senior engineers during code reviews to understand testing patterns
    2. Create comprehensive unit tests for at least 2 new features
    3. Practice writing integration tests for API endpoints
    4. Document common testing patterns found in the codebase
    5. Set up local test coverage reporting and monitor it weekly

**Mid-Level Engineer** 

    Expectation: "Lead the migration of our authentication service from monolith
    to microservice while maintaining system stability"

    Key Steps:

    1. Create technical design document outlining migration strategy
    2. Identify and document all authentication service dependencies
    3. Build migration validation framework to ensure data consistency
    4. Coordinate with DevOps to set up new service infrastructure
    5. Develop rollback plan and success metrics
    6. Execute phased migration starting with non-critical paths

**Senior Engineer**

    Expectation: "Reduce cloud infrastructure costs by 25% while maintaining
    current performance SLAs"

    Key Steps:

    1. Analyze current cloud resource usage patterns across all services
    2. Identify top 3 cost drivers through resource utilization reports
    3. Design and implement automated resource scaling policies
    4. Create cost allocation dashboards for real-time monitoring
    5. Implement and test cost optimization strategies
    6. Document best practices for cost-effective cloud resource usage


#### Stability isn’t bad

Not everyone needs to strive for growth all the time. If someone is performing well, it should be ok to set expectations which maintain a stable level of impact. We also want to avoid people always striving for the next level, which has been shown to create toxic dynamics which aren’t good for the overall team performance.


#### New hires

For new hires, the manager and engineer should meet within the first two weeks to set their initial expectations. It’s best to limit the duration of these goals to no more than 90-days with a focus on onboarding to the team and the company. At the end of the onboarding period, the engineer and manager can then meet to set expectations for the remainder of the period. This allows the new hire to focus on onboarding and allows the manager to get to know the engineer before guiding longer term goals.


### Feedback & Review

At the end of the period, the manager guides a process to deliver feedback to the engineer before beginning the expectation setting process again. 

**1. Self Assessment**: At the end of the review period, the individual should write a brief assessment of how they performed relative to their expectations. Did they meet expectations? Did they perform the key steps? If not, why not? It will be common for expectations to be missed, and that is not a problem if there are learning opportunities. For example, focus may have changed or the team may have needed to adapt to new business needs which removed an opportunity to exercise a skill.

**2. Peer Feedback:** The manager should then solicit feedback from people the engineer collaborated with. Ideally this should be cross-functional and come from various levels. Their feedback should be predominantly based on their performance against the personal expectations, but should also look at overall role fit and growth potential, as this feedback will shape expectations for the next period. The manager can solicit this feedback in 1:1s, using forms, or performance management software, but in either approach, the manager should request objective examples to support opinions. 

**3. Feedback Synthesis:** Once the manager has collected and synthesized the peer feedback and the self assessment, they should identify key themes and provide their own insights to the engineer based on the talent mapping exercise. Sharing this synthesis should be done 1:1 with a collaborative approach to understand how the employee reflects on the feedback. 

**4. Developmental Planning:** The engineer and manager collaborate to create a personalized development plan, following the expectations setting process above. They should identify specific actions, resources, and support needed to achieve the employee's goals. 

**6. Feedback on Expectations:** Where possible, the skip level (and optionally skip-skip) manager should provide feedback on expectations, this helps create an even level-setting across the organization and proactively identifies goals that may be misaligned with company direction.
