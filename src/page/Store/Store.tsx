import React, { useEffect, useState } from 'react'
import { EntriesPerPage, NoRecordFound, TableFetch } from '../../components/TableOptions'
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getInventory } from '../../features/Inventory/inventorySlice';
import { NavLink } from 'react-router-dom';


interface containerProps {

	title: string,
}
const Store: React.FC<containerProps> = () => {
	const dispatch = useAppDispatch();
	// --- Pagination --- //
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "10";
	});

	useEffect(() => {
		localStorage.setItem("reportsPerPages", entriesPerPage);
	}, [entriesPerPage]);



	let layoutControllerBtns: any = document.querySelectorAll("[data-control]");
	let cardsElem: any = document.getElementById("cards");

	layoutControllerBtns.forEach((btn: any) => {
		btn.addEventListener("click", (e: any) => {

			let layoutControl = e.currentTarget.dataset.control;

			cardsElem.setAttribute("data-layout", layoutControl);

			[...layoutControllerBtns]?.map((btn) => btn.classNameList.remove("active"));

			btn.classNameList.add("active");
		});
	});

	const { getdata, getisLoading } = useAppSelector((state: any) => state.inventory);
	useEffect(() => {
		dispatch(getInventory())

	}, [dispatch])

	// @ts-ignore
	const COMPLETED = getdata?.inventory?.filter((obj: { status: string; }) => {
		// @ts-ignore
		return obj?.deviceStatus === "Not In Use" && obj?.status === "Good";
	});


	const [displayData, setDisplayData] = useState([]);
	return (
		<div>
			<div className='allemployees-container-main' >
				<div className=' '>
					<span className='main-title'>Items in Store</span>
				</div>
				<div>
					<EntriesPerPage
						data={displayData}
						entriesPerPage={entriesPerPage}
						setEntriesPerPage={setEntriesPerPage}
					/>
				</div>
				<div>



				</div>
			</div>

			<div>
				<section>
					<div className="container">
						<div className="section-header">
							<h2 className="section-title">Collections</h2>
							<div className="button-group button-group--collapse">
								<button className="button button--icon-only" data-control="list">
									<svg viewBox="0 0 512 512" width="100"  >
										<path d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" />
									</svg>
								</button>
								<button className="button button--icon-only active" data-control="grid">
									<svg viewBox="0 0 512 512" width="100"  >
										<path d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z" />
									</svg>
								</button>
							</div>
						</div>
						<ul role="list" className="cards" id="cards" data-layout="grid">

							{
								getisLoading ? (
									<TableFetch colSpan={14} />
								) : COMPLETED === 0 || COMPLETED === undefined ? (
									<NoRecordFound colSpan={14} />
								) : (COMPLETED?.map((item: any, i: any) => (
									<li key={i}>
										<div className="card">
											<div className="card__img-wrapper">
												<img className="card__img" src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYyMjg2OTN8&ixlib=rb-4.0.3&q=80&w=400" alt="" />
											</div>
											<div className="card__content">
												<h3>{item?.laptopName}</h3>
												<p>{item?.modelName}</p>
												<NavLink
													to={`/inventory/viewinventory/${item?.id}/view`}
													className="button"
												>
													View
												</NavLink>
											</div>
										</div>
									</li>
								)))}

						</ul>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Store
