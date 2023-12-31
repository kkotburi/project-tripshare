import React, { useEffect } from 'react';
import { auth } from '../../service/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { __getPostsSlice } from '../../redux/modules/postsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { St } from '../authentication/MyPostsStyle';
import { PostStButton } from '../common/PostStButton';

const MyPosts = () => {
  //hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();

  //html 태그를 자르기 위한 함수
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };
  useEffect(() => {
    const fetchData = () => {
      dispatch(__getPostsSlice());
    };

    fetchData();
  }, [dispatch]);

  const { postsData, isLoading, isError, error } = useSelector((state) => state.postsSlice);
  const myPostsData = postsData.filter((item) => item.uid === auth.currentUser.uid);

  if (isLoading) {
    return <h1>아직 로딩 중입니다</h1>;
  }
  if (isError) {
    return <h1>오류가 발생했어요</h1>;
  }

  return (
    <St.MyPostContainer>
      {myPostsData?.map((myPostData) => {
        const strippedPostBody = stripHtmlTags(myPostData.postBody); //이 부분에서 html태그를 자릅니다
        return (
          <St.MyPostListsWrapper key={myPostData.id}>
            <St.MyPostList>
              <St.MyPostBody>
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{myPostData.postTitle}</p>
                <br />
                <p
                  style={{
                    width: '350px',
                    height: '50px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {strippedPostBody}
                </p>
                <br />
                <div>
                  <PostStButton onClick={() => navigate(`/detail/${myPostData.id}`)}>자세히 보기</PostStButton>
                </div>
              </St.MyPostBody>
              <St.MyPostImg>
                <img src={myPostData.postImg} alt="이미지 없음" width={'150px'} height={'150px'} />
              </St.MyPostImg>
            </St.MyPostList>
          </St.MyPostListsWrapper>
        );
      })}
    </St.MyPostContainer>
  );
};

export default MyPosts;
