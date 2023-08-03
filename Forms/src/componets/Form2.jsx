import React, { useState } from "react";
import "./Form.css";

export const Form2 = () => {
  const [feild, setFeild] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
    skills: [],
    date: "",
    country: "",
  });

  const [isSubmitted, setSubmitted] = useState(null);

  const [errorfeild, seterrorFeild] = useState({
    firstname: false,
    lastname: false,
    email: false,
    password: false,
    gender: false,
    skills: false,
    date: false,
    country: false,
  });

  const [firstnamelength, setfirstnamelegth] = useState(0);

  const isFormValid = (event) => {
    const { value, name, type, checked } = event.target;
    let languages = [...feild.skills];
    if (name === "firstname") {
      setfirstnamelegth(value.trim().length);
    }
    if (type === "checkbox") {
      if (checked) {
        languages.push(value);
      } else {
        languages = [...languages.filter((item) => item !== value)];
      }
      setFeild((pre) => ({ ...pre, skills: languages }));
    } else {
      setFeild((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    let error = false;
    let formValues = feild;

    if (name === "firstname" && value === "") {
      error = true;
    } else if (name === "lastname" && value === "") {
      error = true;
    } else if (
      name === "email" &&
      (value === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    ) {
      error = true;
    } else if (name === "password" && value === "") {
      error = true;
    } else if (name === "gender" && value === "") {
      error = true;
    } else if (name === "skills" && languages.length === 0) {
      error = true;
    } else if (name === "date" && value === "") {
      error = true;
    } else if (name === "country" && value === "") {
      error = true;
    }
    seterrorFeild((prev) => ({ ...prev, [name]: error }));
  };

  // on blur
  const handleBlur = (event) => {
    isFormValid(event);
  };

  // on Change
  const handleChange = (event) => {
    isFormValid(event);
  };

  console.log(feild);
  console.log(errorfeild);
  // on Submit
  const handlesubmit = (event) => {
    event.preventDefault();
    if (isformvalid()) {
      setSubmitted(true);
      return;
    }
    setSubmitted(false);
  };

  const isformvalid = () => {
    const errors = {
      firstname: false,
      lastname: false,
      email: false,
      password: false,
      gender: false,
      skills: false,
      country: false,
    };
    if (feild.firstname === "") {
      errors.firstname = true;
    }
    if (feild.lastname === "") {
      errors.lastname = true;
    }
    if (feild.email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(feild.email)) {
      errors.email = true;
    }
    if (feild.password === "") {
      errors.password = true;
    }
    if (feild.gender === "") {
      errors.gender = true;
    }
    if (feild.date === "") {
      errors.date = true;
    }
    if (feild.skills.length === 0) {
      errors.skills = true;
    }
    if (feild.country === "") {
      errors.country = true;
    }
    seterrorFeild(errors);
    if (Object.values(errors).some((error) => error === true)) {
      return false;
    }
    return true;
  };

  return (
    <div className="first-container">
      <br />
      <h1>Registration Form</h1>

      <h3 className="h3">Using OnBlur</h3>
      {isSubmitted === true && (
        <p className="success">Submitted Successfully</p>
      )}
      {isSubmitted === false && (
        <p className="notsuccess">Please fill the form</p>
      )}

      <form action="#" onSubmit={handlesubmit} autoComplete="off">
        {/*--------input section----------*/}

        <label htmlFor="" className="typing-label">
          FirstName
        </label>
        <input
          type="text"
          name="firstname"
          className="typing-input"
          placeholder="FirstName"
          onBlur={handleBlur}
        />
        {errorfeild.firstname && (
          <p className="danger">Firstname Is Required</p>
        )}
        {firstnamelength > 0 && firstnamelength < 3 && (
          <p className="danger">
            Firstname must be atleast 2 more characters long
          </p>
        )}

        <label htmlFor="" className="typing-label">
          LastName
        </label>
        <input
          type="text"
          name="lastname"
          className="typing-input"
          placeholder="LastName"
          onBlur={handleBlur}
        />
        {errorfeild.lastname && <p className="danger">lastname Is Required</p>}
        <label htmlFor="" className="typing-label">
          Email
        </label>
        <input
          type="text"
          name="email"
          className="typing-input"
          placeholder="Email"
          onBlur={handleBlur}
        />
        {errorfeild.email && <p className="danger">Email Is Required</p>}
        <label htmlFor="" className="typing-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="typing-input"
          placeholder="  password"
          onBlur={handleBlur}
        />
        {errorfeild.password && <p className="danger">Password Is Required</p>}
        <br />
        {/*--------Gender section----------*/}

        <span className="typing-label">Select Your Gender</span>
        <br />
        <label htmlFor="male" className="radio">
          Male
        </label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          className="radio"
          onBlur={handleBlur}
        />
        <label htmlFor="female" className="radio">
          Female
        </label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          className="radio"
          onBlur={handleBlur}
        />
        <br />
        {errorfeild.gender && <p className="danger1">Gender Is Required</p>}
        <br />

        {/*--------Language section----------*/}
        <span className="checkbox-span">Select Your Languages</span>
        <br />
        <label htmlFor="checkbox">Javascript </label>
        <input
          type="checkbox"
          name="skills"
          value="javascript"
          className="radio"
          id="checkbox"
          onBlur={handleBlur}
        />
        <label htmlFor="checkbox">Css </label>
        <input
          type="checkbox"
          name="skills"
          id="checkbox"
          value="css"
          className="radio"
          onBlur={handleBlur}
        />
        <label htmlFor="checkbox">Html </label>
        <input
          id="checkbox"
          type="checkbox"
          name="skills"
          value="html"
          className="radio"
          onBlur={handleBlur}
        />
        <label htmlFor="checkbox" className="php">
          Php{"  "}
        </label>
        <input
          id="checkbox"
          type="checkbox"
          name="skills"
          value="php"
          className="radio"
          onBlur={handleBlur}
        />
        {errorfeild.skills && (
          <p className="danger1">You Must Be Select Atleast 1 Language</p>
        )}
        <br />

        {/*--------Date section----------*/}

        <span htmlFor="date" className="typing-label">
          Date Of Birth{" "}
        </span>
        <input
          id="date"
          type="date"
          name="date"
          className="date"
          onBlur={handleBlur}
        />
        {errorfeild.date && <p className="danger1">date Is Required</p>}
        <br />

        {/*--------country section----------*/}

        <span className="typing-label">Select Your Country</span>
        <select
          name="country"
          id=""
          className="maincountry"
          onBlur={handleBlur}
        >
          <option value="">Select</option>
          <option value="india" className="country">
            India
          </option>
          <option value="uae" className="country">
            Uae
          </option>
          <option value="qatar" className="country">
            Qatar
          </option>
        </select>
        {errorfeild.country && <p className="danger1">country Is Required</p>}
        <br />
        <br />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};
