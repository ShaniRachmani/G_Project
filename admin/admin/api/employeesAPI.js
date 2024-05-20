const employeesApi = {
	register: async (fname, lname, phone, email, areaNum, password) => {
		const userObj = {
			employeeID: 8,
			fname,
			lname,
			phone,
			email,
			isAdmin: true,
			areaNum: 1,
			password,
		};
		const response = await fetch(
			"https://proj.ruppin.ac.il/cgroup53/test2/tar1/api/Employees/Register",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userObj),
			}
		);
		console.log("response", response);
		const data = response.json();
		return data;
	},

	login: async (email, password) => {
		const requestObj = {
			employeeID: 0,
			fName: "",
			lName: "",
			phone: "",
			email: email,
			isAdmin: true,
			areaNum: 0,
			password: password,
		};
		const response = await fetch(
			"https://proj.ruppin.ac.il/cgroup53/test2/tar1/api/Employees/Login",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				cors: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
				},
				accept: "/",

				body: JSON.stringify(requestObj),
			}
		);
		// console.log("response", response.body.getReader());

		// const streamReader = response.body.getReader();
		// const text = await streamReader.read().then((res) => res.value);
		// console.log("text", text);

		return response;
	},
};

export default employeesApi;
