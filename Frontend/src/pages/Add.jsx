import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/Slice";
import { Helmet } from "react-helmet";
import { deleteUserData } from "../redux/slices/Slice";
import { Formik, Form, Field } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { postUserData } from "../redux/slices/Slice";
const Add = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const dispatch = useDispatch();
  const { data, loading, error, basket, wishlist } = useSelector(
    (state) => state.posts
  );
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  const sorted = () => {
    if (type == "az") {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if (type == "za") {
      return [...data].sort((a, b) => b.name.localeCompare(a.name));
    }
    return data;
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    rating: Yup.number().required("Required"),
    description: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
      <div className="table">
        <div>
          <h1>Signup</h1>
          <button className="button1" onClick={() => setType("az")}>
            A to Z
          </button>
          <button className="button2" onClick={() => setType("za")}>
            Z to A
          </button>

          <Formik
            initialValues={{
              id: uuidv4(),
              name: "",
              rating: "",
              description: "",
              imgSrc:
                "https://i.pinimg.com/originals/26/ad/6b/26ad6bff8e10cfe315269386f8e0216f.jpg",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              dispatch(postUserData(values));
            }}
          >
            {({ errors, touched, handleSubmit }) => (
              <Form className="form" onSubmit={handleSubmit}>
                <Field name="name" placeholder="name" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}

                <Field name="rating" placeholder="rating" />
                {errors.rating && touched.rating ? (
                  <div>{errors.rating}</div>
                ) : null}

                <Field name="description" placeholder="description" />
                {errors.description && touched.description ? (
                  <div>{errors.description}</div>
                ) : null}

                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
        <input
          type="text"
          placeholder="search smthng.."
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sorted()
                .filter((elem) =>
                  elem.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.rating}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => dispatch(deleteUserData(row.id))}
                        className="button"
                      >
                        delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Add;
