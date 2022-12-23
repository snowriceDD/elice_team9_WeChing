import styled from 'styled-components';

export interface Post {
  id: number;
  user_id: number;
  content: string;
  status: number;
}
export interface Reviews {
  id: number;
  content: string;
  grade: null;
  status: number;
}
export interface Posts {
  post: Post;
  reviews: Reviews[];
}

export interface reviewProp {
  isReviews?: boolean;
  key?: number;
  posts?: Posts[];
}

export const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Container = styled.div`
  ${flexCenter}
  width: 100vw;
  height: 100vh;
  background: rgba(217, 217, 217, 0.5);
  backdrop-filter: blur(15px);
  overflow: auto;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 400;
`;

export const PostCon = styled.div`
  ${flexCenter}
  justify-content: start;
  flex-direction: column;
  gap: 2rem;
  width: 80vw;
  min-height: 90vh;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

export const Post = styled.div<reviewProp>`
  width: 80%;
  min-height: 100px;
  padding: 20px;
  text-overflow: ellipsis;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transform: translateY(2px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
  border: 2px solid ${({ isReviews }) => (isReviews ? 'limegreen' : 'gray')};
`;

export const PostContent = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Review = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 100px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const ReviewButtonStyle = styled.button`
  display: inline-block;
  width: 50px;
  height: 30px;
  bottom: 1rem;
  margin: 10px;
  background: none;
  border: 2px solid limegreen;
  border-radius: 8px;
  cursor: pointer;
`;

export const ReviewButtonBox = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ReviewReportBtn = styled(ReviewButtonStyle)``;
export const ReviewBookmarkBtn = styled(ReviewButtonStyle)`
  width: 60px;
  margin-left: auto;
`;

export const RP_Form = styled.form`
  display: inline-block;
  padding-left: 20px;
`;
export const RP_FiledSet = styled.fieldset`
  display: inline-block;
  direction: rtl;
  border: 0;
`;
export const RP_Label = styled.label`
  font-size: 1rem;
  color: transparent;
  text-shadow: 0 0 0 #f0f0f0;
  &:hover {
    text-shadow: 0 0 0 red;
  }
  &:hover ~ label {
    text-shadow: 0 0 0 red;
  }
`;
export const RP_Input = styled.input`
  &[type='radio'] {
    display: none;
  }
  &[type='radio']:checked ~ label {
    text-shadow: 0 0 0 red;
  }
`;
export const RP_SubmitBtn = styled(ReviewButtonStyle)``;
