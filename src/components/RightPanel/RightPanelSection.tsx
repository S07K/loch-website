import { useState, ChangeEvent } from 'react';
import './rightPanelSection.css'

const RightPanelSection = () => {

  const [email, setEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(inputValue));
  };
  const redirect = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault()
    if(isValidEmail) {
      window.location.href = 'https://app.loch.one/welcome'
    } else {
      return
    }
  };
  return (
    <div className="rightPanelSection">
      <h1 className="formHeading">
        Sign up for exclusive access.
      </h1>
      <form className='flex flex-col items-center'>
          <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleInputChange}
          className="formInput block rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-2 focus:ring-2 focus:ring-inset hover:ring-inset sm:text-sm sm:leading-6"
          placeholder="Your email address"
        />
        {!isValidEmail && (
          <p className="text-red-500 text-sm mt-2">Please enter a valid email.</p>
        )}
        <button className="rounded-full submitBtn" onClick={redirect}>Save Changes</button>
        <p className="formInfo mt-2 text-slate-600 text-sm">
          You'll receive an email with an invite link to join.
        </p>
      </form>
    </div>
  );
}

export default RightPanelSection;
