const activitiesApi = {
	getAllActivities: async () => {
		const response = await fetch(
			"https://proj.ruppin.ac.il/cgroup53/test2/tar1/api/Activities"
		);
		const data = await response.json();
		return data;
	},
};

export default activitiesApi;
// https://proj.ruppin.ac.il/cgroup53/test2/tar1/api/Activities
