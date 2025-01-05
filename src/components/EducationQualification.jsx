

const EducationalQualification = () => {
  const qualifications = [
    {
      level: "SSC",
      session:"2013-2014",
      field: "Science",
      description: "Achieved a strong foundation in science disciplines.",
    },
    {
      level: "HSC",
      session:"2015-2016",
      field: "Science",
      description: "Advanced understanding of science subjects with exceptional performance.",
    },
    {
      level: "B.Sc.",
      session:"2016-2017",
      field: "Mathematics",
      description: "Graduated with 1st Class result, specializing in mathematics.",
    },
    {
      level: "M.Sc.",
      session:"2020-2021",
      field: "Mathematics",
      description: "Achieved 1st Class honors in advanced mathematical concepts.",
    },
  ];

  return (
    <div id="education" className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-cyan-700 mb-6">Educational Qualification</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {qualifications.map((qual, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl border border-gray-200 p-4 rounded-lg hover:shadow-2xl transition-all"
          >
            <div className="card-body">
              <p className="text-lg text-cyan-600 font-semibold">{qual.session}</p>
              <h3 className="text-2xl font-semibold">{qual.level}</h3>
              <p className="text-sm text-gray-600">{qual.field}</p>
              <p className="mt-2 text-gray-700">{qual.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalQualification;
