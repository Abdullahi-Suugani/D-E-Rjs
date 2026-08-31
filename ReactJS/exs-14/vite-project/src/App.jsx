import { useReducer } from "react";

const initialState = {
  step: 0,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
};

const steps = ["Profile", "Contact", "Review"];

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    case "NEXT_STEP":
      return {
        ...state,
        step: Math.min(state.step + 1, steps.length - 1),
      };
    case "PREV_STEP":
      return {
        ...state,
        step: Math.max(state.step - 1, 0),
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, formData } = state;

  function updateField(event) {
    const { name, value } = event.target;

    dispatch({
      type: "UPDATE_FIELD",
      field: name,
      value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (step < steps.length - 1) {
      dispatch({ type: "NEXT_STEP" });
      return;
    }

    alert("Registration submitted successfully!");
    dispatch({ type: "RESET_FORM" });
  }

  return (
    <main>
      <section>
        <h1>Multi-Step Registration</h1>

        <form onSubmit={handleSubmit}>
          {step === 0 && (
            <div>
              <h2>Step 1: Profile</h2>
              <label>
                First Name
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={updateField}
                  required
                />
              </label>
              <br />
              <label>
                Last Name
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={updateField}
                  required
                />
              </label>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2>Step 2: Contact</h2>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={updateField}
                  required
                />
              </label>
              <br />
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={updateField}
                  required
                />
              </label>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2>Step 3: Review</h2>
              <dl>
                <div>
                  <dt>First Name</dt>
                  <dd>{formData.firstName}</dd>
                </div>
                <div>
                  <dt>Last Name</dt>
                  <dd>{formData.lastName}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{formData.email}</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>{formData.phone}</dd>
                </div>
              </dl>
            </div>
          )}

          <div>
            {step > 0 && (
              <button
                type="button"
                onClick={() => dispatch({ type: "PREV_STEP" })}
              >
                Back
              </button>
            )}
            <button type="submit">
              {step === steps.length - 1 ? "Confirm" : "Next"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default MultiStepForm;
