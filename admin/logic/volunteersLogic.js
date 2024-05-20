export const getFittingVolunteers = (volunteers, activity) => {
	const suitableVolunteers = [];
	for (let i = 0; i < volunteers.length; i++) {
		if (volunteerFits(volunteers[i], activity)) {
			suitableVolunteers.push(volunteers[i]);
		}
	}
	// if (suitableVolunteers > activity.amount) {
	// 	useSmartFilter(suitableVolunteers, activity.amount);
	// }
	return suitableVolunteers;
};

const useSmartFilter = (suitableVolunteers, amount) => {
	suitableVolunteers.sort((a, b) => {
		const latestA = a.activities.reduce((latest, act) =>
			latest.date > act.date ? latest : act
		).date;
		const latestB = b.activities.reduce((latest, act) =>
			latest.date > act.date ? latest : act
		).date;
		return latestB - latestA;
	});
	const result = suitableVolunteers.slice(0, amount);
	// const result = suitableVolunteers.filter(volunteer => {
	//     const latest = volunteer.activities.reduce((latest, act) => latest.date > act.date ? latest : act).date;
	//     return latest - Date.now() > 1000 * 60 * 60 * 24 * 30 * 6;
	// }).slice(0, amount);
	return result;
};

const volunteerFits = (volunteer, activity) => {
	// for (let volAct of volunteer.activities) {
	// 	if (volAct.actNum === activity.actNum) return false;
	// }
	// if (activity.actNum === 64 && volunteer.name == "ss") {
	// 	console.log("area", areaSuitable(activity.areaNum, volunteer.areas));
	// 	console.log("date", dateSuitable(activity.date, volunteer));
	// 	console.log(
	// 		"profession",
	// 		professionFits(activity.activitieProfessions, volunteer.professions)
	// 	);
	// 	console.log(volunteer.professions);
	// 	console.log(activity.activitieProfessions);
	// }
	if (!areaSuitable(activity.areaNum, volunteer.areas)) return false;
	if (!dateSuitable(activity.date, volunteer)) return false;
	if (!professionFits(activity.activitieProfessions, volunteer.professions))
		return false;
	return true;
};

const areaSuitable = (activityArea, volunteerAreas) => {
	for (let i = 0; i < volunteerAreas.length; i++) {
		if (volunteerAreas[i].areaNum === activityArea) return true;
	}
	return false;
};

const dateSuitable = (activityDate, volunteer) => {
	const activityWeekDay = new Date(activityDate).getDay();
	if (activityWeekDay === 0) return volunteer.sunday;
	if (activityWeekDay === 1) return volunteer.monday;
	if (activityWeekDay === 2) return volunteer.tuesday;
	if (activityWeekDay === 3) return volunteer.wednesday;
	if (activityWeekDay === 4) return volunteer.thursday;
	if (activityWeekDay === 5) return volunteer.friday;
	if (activityWeekDay === 6) return volunteer.saturday;
};

const professionFits = (activityProfessions, volunteerProfessions) => {
	for (let i = 0; i < volunteerProfessions.length; i++) {
		for (let j = 0; j < activityProfessions.length; j++) {
			if (
				activityProfessions[j].professionNum ===
				volunteerProfessions[i].professionNum
			)
				return true;
		}
	}
	return false;
};
