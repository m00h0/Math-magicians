export default function Calculator() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <p>0</p>
      </div>
      <BorderElm />
    </div>
  );
}

function BorderElm() {
  return (
    <div className="container">
      <button className="btn" type="submit" name="AC">AC</button>
      <button className="btn" type="submit" name="+/-">+/-</button>
      <button className="btn" type="submit" name="%">%</button>
      <button className="btn btn-color" type="submit" name="/">/</button>
      <br />

      <button className="btn" type="submit" name="7">7</button>
      <button className="btn" type="submit" name="8">8</button>
      <button className="btn" type="submit" name="9">9</button>
      <button className="btn btn-color" type="submit" name="*">*</button>
      <br />

      <button className="btn" type="submit" name="4">4</button>
      <button className="btn" type="submit" name="5">5</button>
      <button className="btn" type="submit" name="6">6</button>
      <button className="btn btn-color" type="submit" name="-">-</button>
      <br />

      <button className="btn" type="submit" name="1">1</button>
      <button className="btn" type="submit" name="2">2</button>
      <button className="btn" type="submit" name="3">3</button>
      <button className="btn btn-color" type="submit" name="+">+</button>
      <br />

      <button className="zero" type="submit" name="0">0</button>
      <button className="btn" type="submit" name=".">.</button>
      <button className="btn btn-color" type="submit" name="=">=</button>
      <br />
    </div>
  );
}
