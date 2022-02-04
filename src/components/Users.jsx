import React from "react";
import classes from "../styles/Users.module.css";
import avatar from "../assets/images/profile.png";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import { NavLink } from "react-router-dom";

const Users = (props) => {
	const onUnFollow = (e, id) => {
		e.target.style.color = 'red';
		props.unfollow(e, id);
	};
	const onFollow = (e, id) => {
		e.target.style.color = 'red';
		props.follow(e, id);
	};

	return (
		<div>
			{
				props.isFetching ? (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							height: "100%",
							alignItems: "center",
						}}
					>
						<CircularProgress/>
					</div>
				) : (
					<div className={classes.usersPage}>
						<ul className={classes.users__list}>
							{props.users.map((item) => {
								return (
									<li key={item.id} className={classes.users__item}>
										<NavLink to={`/profile/${item.id}`}>
											<img
												src={item.photos.small || avatar}
												alt=""
												className={classes.item__photo}
											/>
										</NavLink>
										<div className={classes.item__info}>
											{item.name}
											<div className={classes.item__location}></div>
											{item.followed ? (
												<button
													onClick={(e) => onUnFollow(e, item.id)}
													className={classes.item__button}
												>
													Отписаться
												</button>
											) : (
												<button
													onClick={(e) => {
														onFollow(e, item.id);
													}}
													className={classes.item__button}
												>
													Подписаться
												</button>
											)}
										</div>
									</li>
								);
							})}
						</ul>
						<ul className={classes.pagination}>
							<Pagination
								count={Math.ceil(props.totalCount / props.countItems)}
								variant="outlined"
								shape="rounded"
								page={props.currentPage}
								onChange={(_, num) => {
									props.onPageChanged(num);
								}}
							/>
						</ul>
					</div>
				)
			}
		</div>

	);
};
export default Users;
