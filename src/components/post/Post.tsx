import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './CKEditor.css';
import axios from 'axios';
import { useState, FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Board } from './Board';
import { postSlice } from '../../postSlice';
import { Tip } from './Tip';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

/*
{
TODO: 글 이어서 작성하기 기능 구현
  1) 세션스토리지에 저장 => 새로고침하거나 세션이 만료되면 삭제 => 글 올리기 버튼 클릭 시 삭제, 
      TODO:로그아웃시 삭제?
  2) 로컬스토리지에 저장 => 새로고침해도 사라지지 않지만 로그아웃하거나 글 올리기 버튼 클릭 시 삭제

accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJlbWFpbCI6IjEwMDR3aXBpQGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNjc4NzkzLCJleHAiOjE2NzE2ODIzOTN9.Rvh51uw7vprln7GvFHDQAzARaHBQLHfHFB4-Q-vjKgs",
refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJlbWFpbCI6IjEwMDR3aXBpQGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNjc0NTQ4LCJleHAiOjE2NzI4ODQxNDh9.Ru8ySF0YlN55FMEIEnnjGoK-3bkejmh1yNeELbb6xMM"
}
*/

export const Post: FC = () => {
  const [savedBody, setSavedBody] = useState<string | null>('');
  const [body, setBody] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async () => {
    await axios
      .post(
        `/api/post`,
        {
          content: body,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJlbWFpbCI6IjEwMDR3aXBpQGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNzgwODMxLCJleHAiOjE2NzE4NjM2MzF9.HJG9D1vc9xFG7B3FfOM8jcBUnX7xeDYHjHQ0rAVBj0A`,
            // credentials: 'include',
            // withCredentials: true,
          },
        }
      )
      .then(() => {
        dispatch(postSlice.actions.savePost(body));
        alert('글 작성 완료');
        sessionStorage.removeItem('myText');
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (
      sessionStorage.getItem('myText') &&
      window.confirm('글을 이어서 작성하시겠습니까?')
    )
      return setSavedBody(sessionStorage.getItem('myText'));
  }, []);

  return (
    <S.Main>
      <Tip />
      <h1>새 글 쓰기</h1>
      <CKEditor
        editor={ClassicEditor}
        config={{
          placeholder: '수정이 불가하므로 신중한 작성바랍니다.',
          toolbar: ['bold', 'italic', 'numberedList', 'bulletedList'],
        }}
        data={savedBody}
        onReady={(editor: any) => {
          editor.focus();
        }}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setBody(data);
        }}
        onBlur={() => {
          sessionStorage.setItem('myText', body);
        }}
      />

      <button onClick={submitHandler} disabled={body ? false : true}>
        올리기
      </button>
      <Board />
    </S.Main>
  );
};
