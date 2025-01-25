import { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Title from "../title/title.component";
import FormInput from "../form-input/form-input.component";
import PhoneNumberField from "../phone-number-field/phone-number-field.component";
import Button from "../button/button.component";
import styles from "./join-us.module.scss";
import assets from "../../assets";

const JoinUs = () => {
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
  });

  const { control, handleSubmit, setValue } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("phone", "");
    setValue("email", "");
  }, [setValue]);

  return (
    <section className={styles.joinUs}>
      <div className="container">
        <div className={styles.joinUsContainer}>
          <div
            className="position-relative p-0 me-0"
            style={{ justifyItems: "left" }}
          >
            <Title title={"Join the Future of Real Estate"} />
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <p className={styles.signup}>
                Sign up now to access exclusive content and be the first to
                explore our Metaverse platform.
              </p>
              <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        fieldId="firstName"
                        type="text"
                        placeholder="First Name"
                        value={field.value || ""}
                        onChange={field.onChange}
                        icon={assets.person}
                      />
                    )}
                  />
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        fieldId="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={field.value || ""}
                        onChange={field.onChange}
                        icon={assets.person}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        fieldId="email"
                        type="email"
                        placeholder="Email"
                        value={field.value || ""}
                        onChange={field.onChange}
                        icon={assets.email}
                      />
                    )}
                  />
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <PhoneNumberField
                        fieldId="phone"
                        value={field.value || ""}
                        onChange={field.onChange}
                        icon={assets.phone}
                      />
                    )}
                  />
                  <div
                    className={`d-flex justify-content-between ${styles.customGap}`}
                  >
                    <Button
                      imgSrc={assets.placholder}
                      altText={"placholder"}
                      text={"Try it For Free"}
                    />
                    <Button
                      imgSrc={assets.placholder}
                      altText={"placholder"}
                      text={"Ask us More"}
                    />
                  </div>
                </Form>
              </FormProvider>
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                src={assets.blendLogo}
                alt="blend-logo"
                style={{ display: "flex", margin: "0 auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={assets.ellipse7}
        className={styles.joinUsEllipse}
        alt="join-us-ellipse"
      />
    </section>
  );
};

export default JoinUs;
