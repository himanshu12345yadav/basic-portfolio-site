import React, { useEffect, useRef } from "react";
import "./css/aboutHtml.css";

const AboutHtml = () => {
  const fab = useRef(null);
  const handleScroll = () => {
    if (window.scrollY >= 800) {
      fab.current.classList.remove("fab-inactive");
      fab.current.classList.add("fab-active");
    } else {
      fab.current.classList.remove("fab-active");
      fab.current.classList.add("fab-inactive");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="section-hero">
        <h1 align="center" className="section-hero-heading">
          Hyper Text Markup Language
        </h1>
        <p className="html-info">
          Hypertext Markup Language (HTML) is the standard markup language for
          documents designed to be displayed in a web browser. It can be
          assisted by technologies such as Cascading Style Sheets (CSS) and
          scripting languages such as JavaScript.{" "}
        </p>
      </section>
      <h1 align="center" className="subheading">
        Contents
      </h1>
      <button
        className="fab fab-inactive"
        ref={fab}
        title="scroll to top"
        onClick={() => window.scrollTo(0, 0)}
      >
        <span className="material-icons">arrow_upward</span>
      </button>
      <div className="contents">
        <ul>
          <li>
            <a href="#Tags">HTML TAGS</a>
          </li>
          <li>
            <a href="#basicTags">BASIC TAGS</a>
          </li>
          <li>
            <a href="#tableTags">TABLE TAGS</a>
          </li>
          <li>
            <a href="#formTags">FORM TAGS</a>
          </li>
          <li>
            <a href="#lists">LISTS</a>
          </li>
          <li>
            <a href="#multimedia">MULTIMEDIA</a>
          </li>
        </ul>
      </div>
      <div className="htmlTags" id="Tags">
        <table>
          <caption>HTML TAGS</caption>
          <thead>
            <tr>
              <th>HTML TAGS</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;!DOCTYPE html&gt;</td>
              <td>Describes the version of the html</td>
            </tr>
            <tr>
              <td>&lt;head&gt;</td>
              <td>paragraph tag</td>
            </tr>
            <tr>
              <td>&lt;meta&gt;</td>
              <td>
                Gives information about the html page like author, description,
                viewport
              </td>
            </tr>
            <tr>
              <td>&lt;title&gt;</td>
              <td>Describes the title of the page</td>
            </tr>
            <tr>
              <td>&lt;body&gt;</td>
              <td>body tag contains all document</td>
            </tr>
            <tr>
              <td>&lt;Header&gt;</td>
              <td>Makes a section at the starting</td>
            </tr>
            <tr>
              <td>&lt;aside&gt;</td>
              <td>Describes a side bar</td>
            </tr>
            <tr>
              <td>&lt;section&gt;</td>
              <td>Describes a section</td>
            </tr>
            <tr>
              <td>&lt;footer&gt;</td>
              <td>Makes a section at the end of the document</td>
            </tr>
            <tr>
              <td>&lt;style&gt;</td>
              <td>Used to embed inline CSS in the html page</td>
            </tr>
            <tr>
              <td>&lt;link&gt;</td>
              <td>This is used to link files, API,and other resources</td>
            </tr>
            <tr>
              <td>&lt;script&gt;</td>
              <td>Used to write a JavaScript Code</td>
            </tr>
            <tr>
              <td>&lt;!--....--&gt;</td>
              <td>Used to write comment in the Html document</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="htmlTags" id="basicTags">
        <table>
          <caption style={{ paddingTop: "7px" }}>BASIC TAGS</caption>
          <thead>
            <tr>
              <th>HTML TAGS</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;h1-h6&gt;</td>
              <td>Describes the size of headings</td>
            </tr>
            <tr>
              <td>&lt;p&gt;</td>
              <td>Used for writting a paragraph</td>
            </tr>
            <tr>
              <td>&lt;br&gt;</td>
              <td>Used to break from the line</td>
            </tr>
            <tr>
              <td>&lt;hr&gt;</td>
              <td>horizontal rule</td>
            </tr>
            <tr>
              <td>&lt;strong&gt;</td>
              <td>Used to bold the text</td>
            </tr>
            <tr>
              <td>&lt;em&gt;</td>
              <td>used to emphasize the text(italic)</td>
            </tr>
            <tr>
              <td>&lt;del&gt;</td>
              <td>Show a line through the text</td>
            </tr>
            <tr>
              <td>&lt;mark&gt;</td>
              <td>marks a specific text(highlighter)</td>
            </tr>
            <tr>
              <td>&lt;sup&gt;</td>
              <td>A superscript tag</td>
            </tr>
            <tr>
              <td>&lt;sub&gt;</td>
              <td>A subscript tag</td>
            </tr>
            <tr>
              <td>&lt;small&gt;</td>
              <td>Defines a smaller text</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="htmlTags" id="tableTags">
        <table>
          <caption>TABLE HTML TAGS</caption>
          <thead>
            <tr>
              <th>HTML TAGS</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;table&gt;</td>
              <td>Describes a table</td>
            </tr>
            <tr>
              <td>&lt;caption&gt;</td>
              <td>Describes a heading(caption) to the table</td>
            </tr>
            <tr>
              <td>&lt;th&gt;</td>
              <td>Describes a header column</td>
            </tr>
            <tr>
              <td>&lt;td&gt;</td>
              <td>describes data in the table cells</td>
            </tr>
            <tr>
              <td>&lt;thead&gt;</td>
              <td>Describes a head portion of the table</td>
            </tr>
            <tr>
              <td>&lt;tbody&gt;</td>
              <td>Describes the body of the table</td>
            </tr>
            <tr>
              <td>&lt;tfoot&gt;</td>
              <td>Describes the footer of the table</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="htmlTags" id="formTags">
        <table>
          <caption>HTML FORM TAGS</caption>
          <thead>
            <tr>
              <th>HTML TAGS</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;form&gt;</td>
              <td>Describes a region for form</td>
            </tr>
            <tr>
              <td>&lt;input&gt;</td>
              <td>Descibes a input region of many types</td>
            </tr>
            <tr>
              <td>&lt;button&gt;</td>
              <td>show visual of a button</td>
            </tr>
            <tr>
              <td>&lt;select&gt;</td>
              <td>It is used to select specific options</td>
            </tr>
            <tr>
              <td>&lt;option&gt;</td>
              <td>Used along with select to select from the options</td>
            </tr>
            <tr>
              <td>&lt;textarea&gt;</td>
              <td>Gives a area in which text can be written</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="htmlTags" id="lists">
        <table>
          <caption>HTML LISTS</caption>
          <thead>
            <tr>
              <th>HTML TAGS</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;ol&gt;</td>
              <td>Ordered Lists</td>
            </tr>
            <tr>
              <td>&lt;ul&gt;</td>
              <td>Unordered Lists</td>
            </tr>
            <tr>
              <td>&lt;li&gt;</td>
              <td>Lists Item</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="htmlTags" id="multimedia">
        <table>
          <caption>MULTIMEDIA</caption>
          <thead>
            <tr>
              <th>HTML TAGS</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;img&gt;</td>
              <td>used to insert an image</td>
            </tr>
            <tr>
              <td>&lt;video&gt;</td>
              <td>
                Defines a vedio in the region(only mp4,WebM,ogg are accepted)
              </td>
            </tr>
            <tr>
              <td>&lt;iframe&gt;</td>
              <td>Used to target another website/source inside this website</td>
            </tr>
            <tr>
              <td>&lt;audio&gt;</td>
              <td>Defines a audio file(only Mp3,wav,ogg are accepted)</td>
            </tr>
            <tr>
              <td>&lt;source&gt;</td>
              <td>Defines multiple Multimedia files</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AboutHtml;
