"use client";
import { Box, Chip, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Activity } from "@/data/activity";
import { LinkWithIcon } from "@/components/link";
import CardWithImage from "@/components/card/view/CardWithImage";

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  const { chip, date, title, content, thumbnail, organizer, href } = activity;

  return (
    <CardWithImage
      cardSx={{ mt: 1 }}
      content={
        <Stack
          sx={{
            pt: 3,
            pb: 1,
            px: 3,
            display: "flex",
            height: 300,
          }}
          spacing={1}
          justifyContent={href ? "space-between" : "flex-start"}
        >
          <Box
            sx={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Chip
              label={chip}
              size={"medium"}
              sx={{
                backgroundColor: (theme) => theme.palette.common.white,
                borderRadius: 2,
              }}
            />
            <Typography variant={"body2"} sx={{ ml: 2 }}>
              {date}
            </Typography>
          </Box>
          <Stack component={"div"} spacing={1} sx={{ px: 1 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
              {title}
            </Typography>
            <Typography variant={"body1"}>{content}</Typography>
            {organizer && (
              <Typography
                variant={"body2"}
                sx={{ color: (theme) => theme.palette.grey["600"] }}
              >
                주관: {organizer}
              </Typography>
            )}
          </Stack>
          {href && (
            <LinkWithIcon
              href={href}
              text={"학습일지 보러가기"}
              icon={
                <ArrowForwardIcon
                  fontVariant={"body1"}
                  sx={{ color: (theme) => theme.palette.text.primary }}
                />
              }
            />
          )}
        </Stack>
      }
      imgSrc={thumbnail}
      imgAlt={title}
    />
  );
}
