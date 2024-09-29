import { type FC } from "react";
import * as S from "./styled";
import { Icon } from "@static/icons";

export const Socials: FC = ({ ...rest }) => {
    return (
        <S.SocialsStyled {...rest}>
            <S.SocialsList>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://github.com/BengalBots-LSU"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Github</p>
                        <Icon iconData="github" alt="github icon" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://www.linkedin.com/company/bengalbots-lsu/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>LinkedIn</p>
                        <Icon iconData="linkedin" alt="linkedin icon" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://discord.com/invite/f9rmbGcU4y"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Discord</p>
                        <Icon iconData="discord" alt="discord icon" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://linktr.ee/bengalbots"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Linktree</p>
                        <Icon iconData="linktree" alt="linktree icon" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://www.instagram.com/bengal.bots/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Instagram</p>
                        <Icon iconData="instagram" alt="instagram icon" />
                    </S.SocialsLink>
                </S.SocialsListItem>
            </S.SocialsList>
        </S.SocialsStyled>
    );
};
