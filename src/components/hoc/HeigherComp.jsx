const styling = (WrappedComponent, style) => {
  return (props) => <WrappedComponent {...props} style={style} />;
};

export default styling;
