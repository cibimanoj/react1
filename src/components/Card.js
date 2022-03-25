import React from "react";
import "./card.css";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cards = () => {
  return (
    <div>
      <Box component="span" sx={{ display: "flex", transform: "scale(0.8)" }}>
        <div style={{ margin: "20px" }}>
          <Card
            sx={{ minWidth: 500, minHeight: 500, borderRadius: 5 }}
            className="card"
          >
            <CardContent>
              <Typography
                sx={{ fontSize: "40px", textAlign: "center" }}
                style={{color:"grey"}}
                gutterBottom
              >
                FREE
              </Typography>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "70px",
                  marginTop: "10px",
                }}
              >
                $0<span style={{ fontSize: "20px" }}>/month</span>
              </h1>
              <Divider />
              <ul className="fa-ul" style={{ fontSize: "25px" }}>
                <li>
                  <span className="fa-li">
                    <i class="fas fa-check" style={{ color: "green" }}></i>
                  </span>
                  Single User
                </li>
                <li>
                  <span className="fa-li">
                    <i class="fas fa-check" style={{ color: "green" }}></i>
                  </span>
                  5GB Storage
                </li>
                <li>
                  <span className="fa-li">
                    <i class="fas fa-check" style={{ color: "green" }}></i>
                  </span>
                  Unlimited Public Projects
                </li>
                <li>
                  <span className="fa-li">
                    <i class="fas fa-check" style={{ color: "green" }}></i>
                  </span>
                  Community Access
                </li>
                <li style={{ color: "grey" }}>
                  <span class="fa-li">
                    <i class="fas fa-times" style={{ color: "red" }}></i>
                  </span>
                  Unlimited Private Projects
                </li>
                <li style={{ color: "grey" }}>
                  <span class="fa-li">
                    <i class="fas fa-times" style={{ color: "red" }}></i>
                  </span>
                  Dedicated Phone Support
                </li>
                <li style={{ color: "grey" }}>
                  <span class="fa-li">
                    <i class="fas fa-times" style={{ color: "red" }}></i>
                  </span>
                  Free Subdomain
                </li>
                <li style={{ color: "grey" }}>
                  <span class="fa-li">
                    <i class="fas fa-times" style={{ color: "red" }}></i>
                  </span>
                  Monthly Status Reports
                </li>
              </ul>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                style={{ borderRadius: "25px", width: "100%", fontSize: 25 }}
              >
                Buy now
              </Button>
            </CardActions>
          </Card>
        </div>
        <div style={{ margin: "20px" }}>
        <Card
          sx={{ minWidth: 500, minHeight: 500, borderRadius: 5 }}
          className="card"
        >
          <CardContent>
            <Typography
              sx={{ fontSize: "40px", textAlign: "center" }}
              style={{color:"grey"}}
              gutterBottom
            >
              PLUS
            </Typography>
            <h1
              style={{
                textAlign: "center",
                fontSize: "70px",
                marginTop: "10px",
              }}
            >
              $9<span style={{ fontSize: "20px" }}>/month</span>
            </h1>
            <Divider />
            <ul class="fa-ul" style={{ fontSize: "25px" }}>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                <strong>5 Users</strong>
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                50GB Storage
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                Unlimited Public Projects
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                Community Access
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                Unlimited Private Projects
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                Dedicated Phone Support
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                Free Subdomain
              </li>
              <li style={{ color: "grey" }}>
                <span class="fa-li">
                  <i class="fas fa-times" style={{ color: "red" }}></i>
                </span>
                Monthly Status Reports
              </li>
            </ul>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              style={{ borderRadius: "25px", width: "100%", fontSize: 25 }}

            >
              Buy now
            </Button>
          </CardActions>
        </Card>

        </div>
        <div style={{ margin: "20px" }}>
        <Card
          sx={{ minWidth: 500, minHeight: 500, borderRadius: 5 }}
          className="card"
        >
          <CardContent>
            <Typography
              sx={{ fontSize: "40px", textAlign: "center" }}
              style={{color:"grey"}}
              gutterBottom
            >
              PRO
            </Typography>
            <h1
              style={{
                textAlign: "center",
                fontSize: "70px",
                marginTop: "10px",
              }}
            >
              $49<span style={{ fontSize: "20px" }}>/month</span>
            </h1>
            <Divider />
            <ul class="fa-ul" style={{ fontSize: "25px" }}>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                <strong>Unlimited Users</strong>
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                150GB Storage
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                Unlimited Public Projects
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                Community Access
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                Unlimited Private Projects
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                Dedicated Phone Support
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                <strong>Unlimited</strong> Free Subdomains
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" style={{ color: "green" }}></i>
                </span>
                Monthly Status Reports
              </li>
            </ul>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              style={{ borderRadius: "25px", width: "100%", fontSize: 25 }}
            >
              Buy now
            </Button>
          </CardActions>
        </Card>

        </div>
      </Box>
    </div>
  );
};

export default Cards;
