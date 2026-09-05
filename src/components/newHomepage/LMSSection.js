const features = [
	{
		title: "Recorded Sessions",
		description: "Rewatch anytime.",
	},
	{
		title: "Notes & Resources",
		description: "Everything in one place.",
	},
	{
		title: "Assignments",
		description: "Learn → practice → submit.",
	},
	{
		title: "Progress & Attendance",
		description: "Know where you stand.",
	},
];

export default function LearningPortal() {
	return (
		<section className="bg-[#f8f2e8] px-6 py-10 md:px-12 lg:px-[5.5rem] lg:py-14">
			<div className="mx-auto max-w-[1400px]">
				<div className="max-w-[850px]">
					<span className="mb-5 block text-sm font-semibold tracking-[0.12em] text-[#f26522]">
						LMS - YOUR LEARNING HUB
					</span>

					<h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#191713] md:text-5xl lg:text-6xl">
						Everything you need. Always within reach.
					</h2>

					<p className="mt-6 max-w-[720px] text-lg leading-8 text-[#756b5d]">
						Your learning, assignments, resources, and progress - organised in one place, available 24x7.
					</p>
				</div>

				<div className="mt-10 grid grid-cols-1 overflow-hidden rounded-[22px] border border-[#e5d9c7] bg-[#fbf8f2] sm:grid-cols-2 lg:grid-cols-4">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className={`px-7 py-8 ${
								index !== features.length - 1
									? "border-b border-[#e5d9c7] lg:border-b-0 lg:border-r"
									: ""
							}`}
						>
							<div className="mb-5 h-2 w-2 rounded-full bg-[#f26522]" />
							<h3 className="text-lg font-semibold text-[#191713]">
								{feature.title}
							</h3>
							<p className="mt-2 text-[15px] leading-6 text-[#756b5d]">
								{feature.description}
							</p>
						</div>
					))}
				</div>

				<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<span className="text-xs font-bold tracking-[0.14em] text-[#f26522]">
						24x7 ACCESS
					</span>
					<p className="text-sm text-[#756b5d]">
						Live classes happen every day. Your learning portal stays with you
						throughout the journey.
					</p>
				</div>
			</div>
		</section>
	);
}
