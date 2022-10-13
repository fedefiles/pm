import * as React from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";
import Poster from "./Poster";
import "./styles.css";

type FormValues = {
  name: string;
  email: string;
  gender: string;

};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();
    const onSubmit = (data: FormValues) => {
      Poster(data)

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Headers
        description="PostM is a Post manager, just register and start posting."
      />
      <label htmlFor="name">Name:</label>
      <input
        {...register("name", { required: "This is required." })}
        id="name"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="email">email:</label>
      <input {...register("email", { required: true, minLength: 5 })} />

      <label htmlFor="gender">Gender</label>
      <select {...register("gender")} id="gender">
        <option value="">Select...</option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>

      <input type="submit" />
    </form>
  );
}
