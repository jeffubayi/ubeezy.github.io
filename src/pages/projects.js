import React from 'react'
import styled from 'styled-components'

import {
	Icon,
	Layout,
	Link,
	QueryImage,
	SEO,
	Small,
	WaveSection,
} from 'src/components'

const Projects = styled.div`
	section {
		padding: calc(2rem + 1vw) 0;

		> :first-child {
			margin-top: 0;
		}
	}
`

const ProjectsPage = () => (
	<Layout activePage="projects">
		<SEO title="Projects" />
		<WaveSection>
			<p>
				Here's a brief introduction to some of the projects I've built
				or made contributions to! I'm comfortable with working on
				JavaScript, Python web frameworks and always exploring other
				technologies that may be handy.
			</p>
		</WaveSection>

		<Projects>
			<section>
				<h3>
					<Link to="https://naiblog.xyz"> NaiBlog</Link>
					{''}
					<QueryImage name="naiblog" width={300} border-radius={15} />
				</h3>
				<p>
					A blog site with relative social articles. Inspired by the
					Netflix app features, the site comes with a search and
					recomendation design. As a person who likes reading, this
					site is a haven for writing articles that I related to.
					Developed with Jekyll static site generator and Ruby gems.
				</p>

				<Small>
					&nbsp;
					<Link to="https://naiblog.xyz/" secondary button>
						Demo
					</Link>
					&nbsp;
					<Link
						to="https://github.com/ubeezy/naiblog"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

			<WaveSection as="section">
				<h3>
					{' '}
					Event Scheduler
					<QueryImage name="python" width={200} />
				</h3>
				<p>
					An event scheduler application, sort of like a mini version
					of Eventbrite or meetup.com. Allows users to create outdoor
					events and other users to register as attendees. Built using
					Python, Django and Django Rest-Framework. Here is a{' '}
					<Link to="https://www.jeffubayi.site/blog/Python-event-api">
						tutorial
					</Link>{' '}
					on how I set up the JSON API and tested the endpoints on
					postman.
				</p>
				<Small>
					<Link
						to="https://www.jeffubayi.site/blog/Python-event-api"
						secondary
						button
					>
						Blog
					</Link>
					&nbsp;
					<Link
						to="https://github.com/jeffubayi/Events-Organizer"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</WaveSection>

			<section>
				<h3>
					<Link to="https://macrina.netlify.app/"> Macrina</Link>
					{''}
					<QueryImage name="macrina" width={300} />{' '}
				</h3>

				<p>
					My girl sells designer women clothes, shoes, sweaters,
					etc—and shares her stock with her online instagram
					followers.
				</p>
				<p>
					Built uitilizing React and CSS on the front end and
					showcases a fully functioning shopping cart. This site
					retrieves endpoints for categories and products from a{' '}
					<Link to="https://www.jeffubayi.site/blog/Python-event-api">
						Macrina API
					</Link>
					Once categories and products are retrieved it caches them it
					local storage to give the user a quick experience. Here is a{' '}
					<Link to="https://www.jeffubayi.site/blog/build-fullstack-apps-wih%20-react-django">
						tutorial
					</Link>{' '}
					of the site.
				</p>

				<Small>
					<Link to="https://macrina.netlify.app/" secondary button>
						Demo
					</Link>
					&nbsp;
					<Link
						to="https://github.com/thisRaptori/saurussims"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

			<WaveSection as="section">
				<h3>
					<Link to="https://nyumba.netlify.app/"> Nyumba</Link>
					{''}
					<QueryImage name="nyumba" width={300} />{' '}
				</h3>

				<p>
				    An App that offers arrangements for homestays similar 
					to Airbnb.com. Made with Tailwind CSS utility framework.
					Book unique resorts, hostels and home stays all in one place.
					The design follows Airbnb layout.
				</p>
				<small>
					<Link
						to="https://github.com/jeffubayi/Nyumba"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</small>
			</WaveSection>

			<section>
				<h3>
					<Link to=""> Beba</Link>
					{''}
					<QueryImage name="beba" width={300} />{' '}
				</h3>
				<p>
					An Android/Ios app for Ride sharing /
					 hailing that literally connects you to a vehicle  commute,
					 Made with Flutter framework and deployed on Firebase.
					 The app allows you to hail a ride by checking available trip.
				</p>
				<Small>
					<Link
						to="https://wabebe-58522.web.app/#/"
						secondary
						button
					>
						Demo
					</Link>
					&nbsp;
					<Link
						to="https://github.com/jeffubayi/Beba"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>
		</Projects>
	</Layout>
)

export default ProjectsPage
