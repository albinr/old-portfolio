import React from "react";
import { SkillsContent, SkillsBox, SkillsData, SkillsGroup, SkillsName, SkillsTitle, SkillsLevel, Badge  } from "./SkillElements";

const Frontend = () => {
    return (
        <SkillsContent>
            <SkillsTitle>Frontend development</SkillsTitle>
            <SkillsBox>
                <SkillsGroup>
                    <SkillsData>
                        <Badge/>
                        <div>
                            <SkillsName>HTML</SkillsName>
                            <SkillsLevel>Good</SkillsLevel>
                        </div>
                    </SkillsData>

                    <SkillsData>
                        <Badge/>
                        <div>
                            <SkillsName>CSS</SkillsName>
                            <SkillsLevel>Good</SkillsLevel>
                        </div>
                    </SkillsData>

                    <SkillsData>
                        <Badge/>
                        <div>
                            <SkillsName>JavaScript</SkillsName>
                            <SkillsLevel>Good</SkillsLevel>
                        </div>
                    </SkillsData>
                </SkillsGroup>
                <SkillsGroup>
                    <SkillsData>
                        <Badge/>
                        <div>
                            <SkillsName>React</SkillsName>
                            <SkillsLevel>Good</SkillsLevel>
                        </div>
                    </SkillsData>

                    <SkillsData>
                        <Badge/>
                        <div>
                            <SkillsName>React Native</SkillsName>
                            <SkillsLevel>Good</SkillsLevel>
                        </div>
                    </SkillsData>

                    <SkillsData>
                        <Badge/>
                        <div>
                            <SkillsName>Git</SkillsName>
                            <SkillsLevel>Good</SkillsLevel>
                        </div>
                    </SkillsData>
                </SkillsGroup>
            </SkillsBox>
        </SkillsContent>
    )
}

export default Frontend