import styled from 'styled-components';

export const VideoCardTitle = styled.span`
  visibility: hidden;
  display: block;
  position: relative;
  top: 100%;
  width: 100%;
  padding: 2%;
  background-color: rgba(80, 80, 80, 0.8);
  transition: all 0.4s ease-out;
`;

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 150px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0px;
  margin: 32px 4px;
  opacity: 0.5;

  transition: all 0.8s;
  z-index: 1;

  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1.3);
    z-index: 5;

    ${VideoCardTitle} {
      visibility: visible;
      top: 0;
    }
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export default VideoCardContainer;
