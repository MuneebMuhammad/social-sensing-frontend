import styled from 'styled-components';
import heartIcon from '../../assets/heart.svg';
import locationIcon from '../../assets/location.svg';
import webIcon from '../../assets/global.svg';
import profileImage from '../../assets/profile-pic.jpeg';
import sharedImage from '../../assets/cool-profile-picture.jpeg';
import shareIcon from '../../assets/share.svg';
import retweetIcon from '../../assets/repeat.svg';
import negativeSentimentIcon from '../../assets/frown.svg';
import positiveSentimentIcon from '../../assets/emotsmile-svgrepo-com.svg'
import neutralSentimentIcon from '../../assets/neutral-svgrepo-com.svg'
import userIcon from '../../assets/users.svg';
// Styled components
const CardContainer = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  margin: 1rem;
  background-color: #fff;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 50%;
  max-width: 55%;
`;

const ProfileTextAndImage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: calc(100% - 80px);
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NameHandleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const Name = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const Handle = styled.span`
  color: #1B95E0; // Social media blue color
  font-weight: bold;
`;

const ContentSection = styled.div`
  color: #888888;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-wrap: break-word;
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 300;
`;
const MatchesText = styled.div`
    color: #111;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1rem;
`;

const AdditionalInfo = styled.div`
  display: flex;
  align-items: center;
  color: #888888;
  font-size: 1.2rem;
  font-weight: 300;
`;

const InfoIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const ImageSection = styled.div`
min-width:100px;
width: 200px;
  height: 150px;
    border-radius: 8px;
  background-image: url(${props => props.imgUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 1rem;
`;


const Sentiment = styled.div`
// Make the sentiment section a flex container
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    color: #888888;
    font-size: 1.5rem;
    font-weight: 300;
`;

const DummySvg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
`;
const MetricsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 1rem; // Added padding to the left
  padding-right: 1rem; // Added padding to the right
  width: 45%;
`;

const Divider = styled.div`
  height: auto; // Adjust the height based on the content
  width: 1px;
  background-color: #EDEDED;
  margin: 0 2rem;
  align-self: stretch; // Stretch the divider to fill the parent height
`;

const MetricColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Align the items in the center of the column
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
`;

const MetricRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MetricLabel = styled.span`
    color: #888888;
    font-size: 1.4rem;
    font-weight: 300;
`;


const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const MetricValue = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
`;

const MetricGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 0.5rem;
`;

const SmallMetricsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem; // Add some space above the metrics, if needed
`;
const SmallMetric = styled.div`
  display: flex;
  align-items: center;
margin-right: 7rem;
`;

const SmallMetricValue = styled.span`
  font-size: 1.5rem; // Smaller font size for the third row
  margin-left: 0.5rem; // Space between icon and number
  color: #6631F7;
`;


// React component
const ResultCard = ({profileData, additionalMetrics}) => {
    return (
        <CardContainer>
            <ProfileSection>
                <ProfileImage src={profileData.profileImage} alt="Profile" />
                <ProfileTextAndImage>
                    <TextSection>
                        <NameHandleWrapper>
                            <Name>{profileData.name} &nbsp;</Name>
                            <Handle>{profileData.handle}</Handle>
                            {profileData.sharedImage && <span> &nbsp;&nbsp;&nbsp;shared an image</span>}
                        </NameHandleWrapper>
                        <ContentSection>{profileData.content}</ContentSection>
                        <MatchesText>Matches: {profileData.matches}</MatchesText>
                        <AdditionalInfo>
                            <span>Published {profileData.timePublished} &nbsp;&nbsp;&nbsp;</span>
                            <InfoIcon src={locationIcon} alt="Location" />
                            <span>{profileData.location}&nbsp;&nbsp;&nbsp;</span>
                            <InfoIcon src={webIcon} alt="Platform" />
                            <span>{profileData.platform}</span>
                        </AdditionalInfo>
                    </TextSection>
                    <ImageSection imgUrl={profileData.sharedImage} />
                </ProfileTextAndImage>
            </ProfileSection>

            {/* Metrics Section Starts Here */}
            <Divider />

            <MetricsSection>
                <Row>
                    <Sentiment>
                        {profileData.sentiment=="Negative" && <img src={negativeSentimentIcon} alt="Sentiment" style={{width: '25px'}}/>}
                        {profileData.sentiment=="Positive" && <img src={positiveSentimentIcon} alt="Sentiment" style={{width: '25px'}}/>}
                        {profileData.sentiment=="Neutral" && <img src={neutralSentimentIcon} alt="Sentiment" style={{width: '30px'}}/>}
                        &nbsp; &nbsp;{profileData.sentiment}
                    </Sentiment>
                    <MetricColumn style={{ marginLeft: 'auto' }}>
                        <img src={shareIcon} alt="Share" />
                    </MetricColumn>
                </Row>
                <MetricRow>
                    <MetricColumn>
                        <MetricLabel>Reach</MetricLabel>
                        <MetricValue>{profileData.reach}</MetricValue>
                    </MetricColumn>
                    <MetricColumn>
                        <MetricLabel>Engagement</MetricLabel>
                        <MetricValue>{profileData.engagement}</MetricValue>
                    </MetricColumn>
                    <MetricColumn>
                        <MetricLabel>Trending Post</MetricLabel>
                        <MetricValue>{profileData.trending}</MetricValue>
                    </MetricColumn>
                </MetricRow>
                <SmallMetricsContainer>
                    <SmallMetric>
                        <img src={retweetIcon} alt="Retweet" />
                        <SmallMetricValue>{additionalMetrics.shares}</SmallMetricValue>
                    </SmallMetric>
                    <SmallMetric>
                        <img src={heartIcon} alt="Hearts" />
                        <SmallMetricValue>{additionalMetrics.hearts}</SmallMetricValue>
                    </SmallMetric>
                    <SmallMetric>
                        <img src={userIcon} alt="Users" />
                        <SmallMetricValue>{additionalMetrics.users}</SmallMetricValue>
                    </SmallMetric>
                </SmallMetricsContainer>
            </MetricsSection>
        </CardContainer>
    );
};

export default ResultCard;

