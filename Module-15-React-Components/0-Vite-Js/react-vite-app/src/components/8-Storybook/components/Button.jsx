
import PropTypes from "prop-types";

// npx storybook@latest init
// npm run storybook

// Storybook in 100 secs
// https://www.youtube.com/watch?v=gdlTFPebzAU

// What This Command Does:
// It installs Storybook and configures it for your project.
// It creates a .storybook folder in your project root, which contains configuration files.
// It adds example stories in the src/stories folder.

const Button = ({ label, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: color || "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

export default Button;