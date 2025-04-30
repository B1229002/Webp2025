

const styleArgument = { fontSize: '100px', color: 'red' };

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + " 被點了";
};

const HelloCGU=()=> {
  return (
    <div className="App">
      <h1 style={styleArgument} >
        hello CGU!!
      </h1>
    </div>
  );
}

export default HelloCGU;
