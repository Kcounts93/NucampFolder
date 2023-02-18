import RenderCampsite from "../features/campsites/RenderCampsite";

const CampsiteInfo = ({ route }) => {
  const { campsite } = route.params;
  return <RenderCampsite campsite={campsite} />;
};

export default CampsiteInfo;
