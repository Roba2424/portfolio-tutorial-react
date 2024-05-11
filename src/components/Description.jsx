import manImage from "../assets/man.svg";
import emojiImage from "../assets/emoji.svg";

export default function Description() {
  return (
    <div className="description">
      <div className="text-container">
        <h1>
          Hi{" "}
          <span>
            <img src={emojiImage} alt="" />
          </span>
          ,
          <br /> I’m Robert,
          <br />
          Front-end Developer
        </h1>
        <p>
          I design and develop experiences that make people’s lives <br />
          simpler through Web and Mobile apps.I work with FIgma, HTML5, CSS3,
          JavaScript, React, ReactNative and Flutter.
        </p>
      </div>
      <div className="image-container">
        <img src={manImage} alt="" />
      </div>
    </div>
  );
}
