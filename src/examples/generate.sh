#!/bin/bash

# credentials
user_token="your-token"
description="We are committed to delivering exceptional service and adaptability in an ever-evolving business landscape. Central to this mission is maintaining a highly optimized IT infrastructure, for which we seek a skilled and dedicated Middle/Senior Full-stack Engineer. The ideal candidate will excel at identifying operational challenges and crafting innovative technical solutions to drive company objectives. This role involves close collaboration with stakeholders and subject matter experts across all business units. Responsibilities: 1. Design, develop, and maintain robust and scalable features and components of the client’s product. 2. Participate in code reviews and test parties. 3. Write unit tests and perform debugging to maintain code quality. 4. Contribute to system architecture and technical documentation. 5. Work on the client-side team, actively participate in the team’s ceremonies like standups, retrospectives, plannings, etc. 6. Collaborate with a team of developers, DevOps, QA, and PM. Requirements: 1. At least 3 years of professional experience in development. 2. Multicultural distributed teams experience. 3. Experience in communication with clients and close cooperation in a team. 4. Ability to quickly adapt to new situations, learn, and use new technologies. 5. Ability to work in a large team. 6. Ability to make and justify decisions. 7. Willingness to take on challenges and expand your skills. 8. Negotiation skills are helpful, but the ability to ask the right questions is most valued. 9. Commitment to personal growth/dedication to self-improvement. Technical skills: - TypeScript/JavaScript, - Next.js/React, - GraphQL/Apollo, - Node.js, - PHP, - MySQL, - AWS (Lambda, DynamoDB) - Symfony - WordPress - Fastly - GraphQL Nice to have: - Federation React About ExampleCompanyLLC: Рекрутингове агентство «ExampleCompanyLLC» шукає та знаходить таланти для компаній із 2003-го року. Останні 7 років ми спеціалізуємося на пошуку саме IT-спеціалістів. Серед наших клієнтів є як зовсім невеликі компанії, так і ті, чиї імена у всіх на слуху. let's go to success with us."

# Payload
payload=$(jq -n --arg user_token "$user_token" \
                --arg description "$description" \
                '{user_token: $user_token, description: $description}')

# Request
curl -X POST https://cv.arnelify.com/api/v0.5/generate \
     -H "Content-Type: application/json" \
     -d "$payload"

echo ""