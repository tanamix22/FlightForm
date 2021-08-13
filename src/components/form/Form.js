import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./Form.scss";

const FormAgency = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    swal({
      title: "Your information was sent successfully",
      text: "We'll be in touch with you",
      icon: "success",
      button: "ok",
      timer: "5000",
    });
  };

  return (
    <div className="agencyForm">
      <form className="agencyForm__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="agencyForm__form-item">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            {...register("username", {
              required: true,
            })}
            {...register("username", { pattern: /^[A-Za-z0-9]+$/i })}
          ></input>
          {errors.username && (
            <span>
              This field is required, username may only contain alphanumeric
              characters.
            </span>
          )}
        </div>
        <div className="agencyForm__form-item">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="name"
            {...register("name", {
              required: true,
            })}
            {...register("name", { pattern: /^[A-Za-z]/ })}
          ></input>
          {errors.name && (
            <span>
              This field is required, name may only contain alphabetic
              characters.
            </span>
          )}
        </div>
        <div className="agencyForm__form-item">
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            {...register("email", {
              required: true,
            })}
          ></input>
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="agencyForm__form-item">
          <label>Phone</label>
          <input
            type="number"
            placeholder="Phone"
            {...register("phone", {
              required: true,
            })}
            {...register("phone", { pattern: /^[0-9]+$/i })}
          ></input>
          {errors.phone && (
            <span>This field is required,phone may only contain numbers.</span>
          )}
        </div>
        <div className="agencyForm__form-item">
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            {...register("address", {
              required: true,
            })}
          ></input>
          {errors.address && <span>This field is required</span>}
        </div>
        <div className="agencyForm__form-item">
          <label>Age</label>
          <input
            type="number"
            placeholder="Age"
            {...register("age", {
              required: true,
            })}
            {...register("age", { pattern: /^[0-9]+$/i })}
            {...register("age", { min: 18, max: 100 })}
          ></input>
          {errors.age && (
            <span>
              This field is required,username may only contain numbers (18-100).
            </span>
          )}
        </div>
        <button className="agencyForm__form-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default FormAgency;
