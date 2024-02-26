import "./AddArticle.css";
import FormInput from "../components/FormInput";


export const action = async ({ request }) => {
  const formData = await request.formData();
  
}
const AddArticle = () => {


return (
  <div className="">
      <div className="form-image container">
      <div className="signup-wrapper">

  <div className="signup-container">
    <div method="post">
      <div className="input-group">
        <FormInput
          type="text"
          name="name"
          labelText="Username"
        />
        
      </div>

      <FormInput
        type="email"
        name="email"
        labelText="Email"
      />

      <FormInput
        type="password"
        name="password"
        labelText="Password"
      />
    <button className="button">Eat Shit</button>
    </div>





    </div>
    
  </div>
</div>
    </div>

  );
}
export default AddArticle;


// const data = Object.fromEntries(formData);
//   try {
//     await customFetch.post("/register", data);
//     return redirect("/login");
//   } catch (error) {
//     return error
//   }
// };
// }
