import { useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const RouterWrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();

    return <Component navigate={navigate} params={params} {...props} />
  };

  return RouterWrapper;
};

export default withRouter;