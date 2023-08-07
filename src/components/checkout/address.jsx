import InputFeild from "./form-elements/input-feild"
import PropTypes from 'prop-types';

const Address =({input,handleOnChange,isShipping,isbilling})=>{

const {errors} = input||{};
console.log(errors,input)

    return(<>
	<InputFeild
					name="firstname"
					inputValue={input?.firstname}
					required
					handleOnChange={handleOnChange}
					label="First name"
					errors={errors}
					isShipping={isShipping}
					containerClassNames="w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
				/>
				<InputFeild
					name="lastname"
					inputValue={input?.lastname}
					required
					handleOnChange={handleOnChange}
					label="Last name"
					errors={errors}
					isShipping={isShipping}
					containerClassNames="w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
				/>
		 
		 
			<InputFeild
				name="streetaddress"
				inputValue={input?.streetaddress}
				required
				handleOnChange={handleOnChange}
				label="Street address"
				placeholder="House number and street name"
				errors={errors}
				isShipping={isShipping}
				containerClassNames="mb-4"
			/>
			<InputFeild
				name="address2"
				inputValue={input?.address2}
				onChange={handleOnChange}
				label="Street address line two"
				placeholder="Apartment floor unit building floor etc(optional)"
				errors={errors}
				isShipping={isShipping}
				containerClassNames="mb-4"
			/>
			<InputFeild
				name="city"
				required
				inputValue={input?.city}
				handleOnChange={handleOnChange}
				label="Town/City"
				errors={errors}
				isShipping={isShipping}
				containerClassNames="mb-4"
			/>
			{/* State */}
			{/* <StateSelection
				input={input}
				handleOnChange={handleOnChange}
				states={states}
				isShipping={isShipping}
				isFetchingStates={isFetchingStates}
			/> */}
			<div className="flex flex-wrap overflow-hidden sm:-mx-3">
				<InputFeild
					name="zip"
					inputValue={input?.zip}
					required
					handleOnChange={handleOnChange}
					label="Post code"
					errors={errors}
					isShipping={isShipping}
					containerClassNames="w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
				/>
				<InputFeild
					name="phone"
					inputValue={input?.phone}
					required
					handleOnChange={handleOnChange}
					label="Phone"
					errors={errors}
					isShipping={isShipping}
					containerClassNames="w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
				/>
			</div>
			<InputFeild
				name="email"
				type="email"
				inputValue={input?.email}
				required
				handleOnChange={handleOnChange}
				label="Email"
				errors={errors}
				isShipping={isShipping}
				containerClassNames="mb-4"
			/>
    </>)
}


export default Address