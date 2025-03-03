'use client'
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: calc(100vh - 8.5rem);
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem ;


  .left {
    gap: 2.1875rem;
  }

  .right {
    gap: 8px;
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 3.75rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
  
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 2rem;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.primary100};
`;

export const CardLeft = styled.div`
  width: 24rem;
  height: 14.4375rem;
  border: 1px solid ${(props) => props.theme.colors.bg300};
  border-radius: 5px;
  padding: 1.6rem 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(10px);
`;

export const DivGroupIcons = styled.div`
  display: flex;
  gap: 0.71rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -1.8rem;
    left: 0;
    height: 4px;
    width: 75px;
    background-color: ${(props) => props.theme.colors.primary100};
  }
`;

//card right home page

export const CardRight = styled.div`
  width: 28.75rem;
  height: 8.5rem;
  border: 1px solid ${(props) => props.theme.colors.bg300};
  border-radius: 5px;
  padding: 1.31rem 1.75rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    width: 24rem;
  }

  @media (max-width: 1024px) {
    width: 24rem;
  }
`;

export const HeaderCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const TitleCard = styled.h3`
  font-size: 1rem;
`;

export const Watchs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-size: 12px;
  svg {
    font-size: 1rem;
  }
`;

export const GitDetails = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 12px;
`;
export const Detail = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 1rem;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-size: 12px;
`;

export const Tecnologies = styled.div`
  font-size: 12px;
`;
