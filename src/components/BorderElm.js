import PropTypes from 'prop-types';

export default function BoardElm({ onClickButton }) {
  const clickHandle = (e) => onClickButton(e.target.name);
  return (
    <div className="outer-container">
      <button type="submit" className="btn" name="AC" onClick={clickHandle}>AC</button>
      <button type="submit" className="btn" name="+/-" onClick={clickHandle}>+/-</button>
      <button type="submit" className="btn" name="%" onClick={clickHandle}>%</button>
      <button type="submit" className="btn btn-color" name="÷" onClick={clickHandle}>÷</button>
      <br />
      <button type="submit" className="btn" name="7" onClick={clickHandle}>7</button>
      <button type="submit" className="btn" name="8" onClick={clickHandle}>8</button>
      <button type="submit" className="btn" name="9" onClick={clickHandle}>9</button>
      <button type="submit" className="btn btn-color" name="x" onClick={clickHandle}>x</button>
      <br />
      <button type="submit" className="btn" name="4" onClick={clickHandle}>4</button>
      <button type="submit" className="btn" name="5" onClick={clickHandle}>5</button>
      <button type="submit" className="btn" name="6" onClick={clickHandle}>6</button>
      <button type="submit" className="btn btn-color" name="-" onClick={clickHandle}>-</button>
      <br />
      <button type="submit" className="btn" name="1" onClick={clickHandle}>1</button>
      <button type="submit" className="btn" name="2" onClick={clickHandle}>2</button>
      <button type="submit" className="btn" name="3" onClick={clickHandle}>3</button>
      <button type="submit" className="btn btn-color" name="+" onClick={clickHandle}>+</button>
      <br />
      <button type="submit" className="zero" name="0" onClick={clickHandle}>0</button>
      <button type="submit" className="btn" name="." onClick={clickHandle}>.</button>
      <button type="submit" className="btn btn-color" name="=" onClick={clickHandle}>=</button>
    </div>
  );
}
BoardElm.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
