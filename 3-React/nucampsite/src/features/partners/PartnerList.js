import { Col } from "reactstrap";
import Partner from "../partners/Partner";
import { selectAllPartners } from "./partnersSlice";
import { useSelector } from "react-redux";

const PartnerList = () => {
  const partners = useSelector(selectAllPartners);
  return (
    <Col className="mt-4">
      {partners.map((partner) => {
        return (
          <div className="d-flex md-5" key={partner.id}>
            <Partner partner={partner} />
          </div>
        );
      })}
    </Col>
  );
};

export default PartnerList;
