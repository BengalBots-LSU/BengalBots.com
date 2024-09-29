import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:bengalbots@lsu.edu"
                            target="_blank"
                        >
                            <h3>Bengalbots@lsu.edu</h3>
                            <p>
                                Feel free to e-mail us!
                            </p>
                        </TextBox>
                    </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
