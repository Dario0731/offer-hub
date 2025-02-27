import { Router, type Router as ExpressRouter } from "express";
import portfolioItemsController from "./controllers/portfolio-items.controller";
import achievementsController from "./controllers/achievements.controller";
import notificationsController from "./controllers/notifications.controller";
import authLogsController from "./controllers/auth-logs.controller";
import certificationsController from "./controllers/certifications.controller";
import conversationsController from '@/controllers/conversations.controller';
import usersController from '@/controllers/users.controller';

const router: ExpressRouter = Router();

// Health Check Route
router.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

router.use("/portfolio-items", portfolioItemsController);
router.use("/achievements", achievementsController);
router.use("/notifications", notificationsController);
router.use("/auth-logs", authLogsController);
router.use('/certifications', certificationsController);
router.use('/conversations', conversationsController);
router.use('/users', usersController);

export default router;
