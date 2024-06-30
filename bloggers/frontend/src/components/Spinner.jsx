import ClipLoader from "react-spinners/ClipLoader";

import PropTypes from "prop-types";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "purple",
};

const Spinner = ({ color, loading }) => {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={250}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

Spinner.propTypes = {
  color: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Spinner;
