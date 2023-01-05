import React from "react";
import { SkillsContent, SkillsBox, SkillsData, SkillsGroup, SkillsName, SkillsTitle, SkillsLevel  } from "./SkillElements";
import { HiBadgeCheck } from "react-icons/hi";
const Backend = () => {
    return (
        <SkillsContent>
        <SkillsTitle>Backend development</SkillsTitle>
        <SkillsBox>
            <SkillsGroup>
                <SkillsData>
                    <HiBadgeCheck/>
                    <div>
                        <SkillsName>Node.js</SkillsName>
                        <SkillsLevel>Basic</SkillsLevel>
                    </div>
                </SkillsData>

                <SkillsData>
                    <HiBadgeCheck/>
                    <div>
                        <SkillsName>Firebase</SkillsName>
                        <SkillsLevel>Basic</SkillsLevel>
                    </div>
                </SkillsData>

                <SkillsData>
                    <HiBadgeCheck/>
                    <div>
                        <SkillsName>GraphQL</SkillsName>
                        <SkillsLevel>Basic</SkillsLevel>
                    </div>
                </SkillsData>
            </SkillsGroup>
            {/* <SkillsGroup>
                <SkillsData>
                    <HiBadgeCheck/>
                    <div>
                        <SkillsName></SkillsName>
                        <SkillsLevel></SkillsLevel>
                    </div>
                </SkillsData>

                <SkillsData>
                    <HiBadgeCheck/>
                    <div>
                        <SkillsName></SkillsName>
                        <SkillsLevel></SkillsLevel>
                    </div>
                </SkillsData>

                <SkillsData>
                    <HiBadgeCheck/>
                    <div>
                        <SkillsName></SkillsName>
                        <SkillsLevel></SkillsLevel>
                    </div>
                </SkillsData>
            </SkillsGroup> */}
        </SkillsBox>
    </SkillsContent>
    )
}

export default Backend