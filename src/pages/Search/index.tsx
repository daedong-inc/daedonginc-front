import styled from 'styled-components';
import {
  getLatoTypographyStyles,
  getNotoTypographyStyles,
} from 'styles/font/font';
import theme from 'theme';
import { ReactComponent as Logo } from 'assets/대동로고.svg';
import CustomerService from '@components/views/Main/CustomerService/CustomerService';
import Footer from '@components/views/Main/Footer';
import FloatingButton from '@components/common/Button/FloatingButton';
import { ReactComponent as Icon } from 'assets/icons/search.svg';

const Search = () => {
  const res = {
    data: {
      product: [
        {
          id: 1,
          img: `https://picsum.photos/640/680?random=${Math.random()}`,
          title: '블라1',
        },
        {
          id: 2,
          img: `https://picsum.photos/640/680?random=${Math.random()}`,
          title: '블라2',
        },
        {
          id: 32,
          img: `https://picsum.photos/640/680?random=${Math.random()}`,
          title: '블라3',
        },
        {
          id: 4,
          img: `https://picsum.photos/640/680?random=${Math.random()}`,
          title: '블라4',
        },
        {
          id: 5,
          img: `https://picsum.photos/640/680?random=${Math.random()}`,
          title: '블라5',
        },
        {
          id: 6,
          img: `https://picsum.photos/640/680?random=${Math.random()}`,
          title: '블라6',
        },
      ],
      news: [
        {
          id: 12,
          img: `https://picsum.photos/640/680?random=${Math.random()}`,
          title: '뉴스1',
          date: '2023.02.02',
          description:
            '㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다. ㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다. ㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다. 소이릴리프’ 2종을새롭게출시했다. ㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다.  2종을새롭게출시했다...',
        },
        {
          id: 13,
          img: `https://picsum.photos/640/680?random=${Math.random()}`,
          title: '뉴스2',
          date: '2023.02.02',

          description:
            '㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다. ㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다. ㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다. 소이릴리프’ 2종을새롭게출시했다. ㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다.  2종을새롭게출시했다...',
        },
        {
          id: 14,
          title: '뉴스3',
          date: '2023.02.02',

          description:
            '㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다. ㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다. ㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다. 소이릴리프’ 2종을새롭게출시했다. ㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다.  2종을새롭게출시했다...',
        },
        {
          id: 15,
          title: '뉴스4',
          date: '2023.02.02',
          description:
            '㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다. ㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다. ㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다. 소이릴리프’ 2종을새롭게출시했다. ㈜아모레퍼시픽의토탈바디케어전문브랜드해피바스가검은콩에서추출한발효세라마이드성분을담은 ‘소이릴리프’ 2종을새롭게출시했다.  2종을새롭게출시했다...',
        },
      ],
    },
  };

  return (
    <Container>
      <SearchWrapper>
        <TitleWrapper>
          <Title>SEARCH</Title>
          <SearchBarContainer>
            <SearchIcon />
            <SearchInput type="text" placeholder="검색어를 입력하세요" />
          </SearchBarContainer>
        </TitleWrapper>
        <ProductWrapper>
          <SectionTitle>PRODUCT</SectionTitle>
          <ContentBox>
            {res.data.product.length === 0 ? (
              <NoSearchResultsBox>검색결과가 없습니다.</NoSearchResultsBox>
            ) : (
              <SearchResultsBox_Product>
                {res.data.product.map((productData) => (
                  <Item key={productData.id}>
                    <ImgBox src={productData.img} />
                    <ProductTitle>{productData.title}</ProductTitle>
                  </Item>
                ))}
              </SearchResultsBox_Product>
            )}
          </ContentBox>
        </ProductWrapper>
        <ProductWrapper>
          <SectionTitle>NEWS</SectionTitle>
          <ContentBox>
            {res.data.news.length === 0 ? (
              <NoSearchResultsBox>검색결과가 없습니다.</NoSearchResultsBox>
            ) : (
              <SearchResultsBox_News>
                {res.data.news.slice(0, 3).map((newsData) => (
                  <NewsBox key={newsData.id}>
                    <NewsImageBox>
                      {newsData.img ? (
                        <NewsImg src={newsData.img} alt="news image" />
                      ) : (
                        <NoImg src={'src/assets/대동로고.svg'} />
                      )}
                    </NewsImageBox>
                    <NewsTitleBox>
                      <div>
                        <NewsTitle>{newsData.title}</NewsTitle>
                        <Date>{newsData.date}</Date>
                      </div>
                      <Dscription>{newsData.description}</Dscription>
                    </NewsTitleBox>
                  </NewsBox>
                ))}
              </SearchResultsBox_News>
            )}
          </ContentBox>
        </ProductWrapper>
      </SearchWrapper>
      <CustomerService />
      <Footer />
      <FloatingButton />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  width: 100%;
  min-height: 870px;
  padding-top: 150px;
  margin: 0 auto;
  text-align: center;
`;

const SearchWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 15rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Title = styled.div`
  max-width: 400px;
  ${getLatoTypographyStyles('Heading2_b')}
  margin-bottom: 32px;
`;

// 검색바

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.neutral300};
  border-radius: 100px;
  padding: 12px 40px;
  width: 400px;
  height: 82px;
`;

export const SearchIcon = styled(Icon)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding: 8px;

  path {
    stroke: ${theme.colors.gray800};
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 16px;
  font-size: 14px;
  background-color: transparent;
  ${getNotoTypographyStyles('Body1_r')}
  color: ${theme.colors.gray800};
  &::placeholder {
    color: ${theme.colors.gray300};
  }
`;

// 검색결과
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 0 60px 0;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  ${getNotoTypographyStyles('Body1_b')}
  height: 66px;
`;

const ContentBox = styled.div``;

const NoSearchResultsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  ${getNotoTypographyStyles('Body2_r')};
  color: ${theme.colors.gray300};
  border-top: ${theme.colors.neutral700} 1px solid;
  border-bottom: ${theme.colors.neutral700} 1px solid;
`;

const SearchResultsBox_Product = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  min-width: 1024px;
  padding: 30px 0;
  min-height: 150px;
  gap: 16px;
  border-top: ${theme.colors.neutral700} 1px solid;
`;

const Item = styled.span`
  display: grid;
  grid-template-rows: 1fr 30px;
  gap: 11px;
  ${getNotoTypographyStyles('Body1_b')};
`;

const ImgBox = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductTitle = styled.p`
  margin: 0;
  ${getNotoTypographyStyles('Body2_r')};
`;

/* 뉴스 */
const SearchResultsBox_News = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 24px;
  padding: 30px 0;
  border-top: ${theme.colors.neutral700} 1px solid;
`;

const NewsBox = styled.div`
  width: 100%;
  height: 180px;
  /* display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start; */

  display: grid;
  grid-template-columns: 260px auto;
  text-align: left;
`;

const NewsImageBox = styled.div`
  width: 230px;
  height: 180px;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

const NewsImg = styled.img`
  width: 100%;
  height: 100%;
`;

const NoImg = styled(Logo)`
  path:not(:nth-child(12)) {
    fill: black;
  }
  height: 22px;
  width: auto;
`;

const NewsTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    margin: 0;
  }
`;

const NewsTitle = styled.p`
  ${getNotoTypographyStyles('Body2_r')};
`;

const Date = styled.p`
  ${getNotoTypographyStyles('Body4_r')};
`;

const Dscription = styled.div`
  ${getNotoTypographyStyles('Body3_r')};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
