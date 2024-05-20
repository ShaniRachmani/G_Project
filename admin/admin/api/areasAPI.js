const areasAPI = {
	getAllAreas: async () => {
		const response = await fetch(
			"https://proj.ruppin.ac.il/cgroup53/test2/tar1/api/Areas"
		);
		return response.json();
	},
};
export default areasAPI;
