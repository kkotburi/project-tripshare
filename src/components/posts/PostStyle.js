import styled from 'styled-components';

export const StPostContainer = styled.div`
  /* background-color: bisque; */

  right: 0px;
  height: 824px;
  /* display: flex; */

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  overflow-y: hidden;
  &:hover {
    overflow-y: scroll;
  }
`;

export const StPostList = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  margin: 16px;
  border-radius: 10px;

  background-color: rgb(230, 241, 245);
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.18);

  border: solid;
  margin: 10px;
  padding: 10px;
  display: flex;
`;

export const StModalBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: '0%';
  left: '0%';
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const StModalContents = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 450px;
  width: 90%;
  margin-bottom: 6.25rem;
`;

export const StOptionWrapper = styled.div`
  width: 100%;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  margin-left: 420px;
  font-size: 16px;
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StOptionHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 8px;
  font-weight: bold;
  background-color: #f0f0f0;
  border-radius: 5px;
  align-items: center;
  text-align: center;
`;

export const StOptionList = styled.div`
  width: 26%;
  background-color: gray;
  position: absolute;
`;

export const StOptionItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const PostButton = styled.button`
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
  width: 80px;

  /* padding: 10px 20px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45a049;
  } */
`;

export const StInput = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const StLabel = styled.label`
  font-weight: bold;
`;