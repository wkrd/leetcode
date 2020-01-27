package leetcode.robot_room_cleaner;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

// This is the robot's control interface.
// You should not implement it, or speculate about its implementation
interface Robot {
    // Returns true if the cell in front is open and robot moves into the cell.
    // Returns false if the cell in front is blocked and robot stays in the current
    // cell.
    public boolean move();

    // Robot will stay in the same cell after calling turnLeft/turnRight.
    // Each turn will be 90 degrees.
    public void turnLeft();

    public void turnRight();

    // Clean the current cell.
    public void clean();
}

public class Solution {
    class Location {
        public final int x;
        public final int y;

        public Location(int x, int y) {
            this.x = x;
            this.y = y;
        }

        @Override
        public boolean equals(Object o) {
            if (o == this)
                return true;
            Location location = (Location) o;
            return x == location.x && y == location.y;
        }

        @Override
        public int hashCode() {
            return Objects.hash(x, y);
        }
    }

    private Set<Location> visited = new HashSet<>();

    /**
     * Generic backtracking algorithm:
     * 
     * <pre>
     * backtrace: 
     *   if(solution)
     *   -  output
     *   -  return 
     * 
     *   for candiate of candidates:
     *     if candidate valid:
     *       place candidate
     *       backtrack
     *       remove candidate
     * 
     * Filled in template for Clean Robots
     * 
     * backtrack(location, direction):
     *   if (no directions unexplored)
     *     finished
     *     return
     * 
     *   for direction in directions - always turn right (or always left) to get new direction
     *     if try_move is not a wall and not visited:
     *       clean
     *       (already moved)
     *       backtrack(next_location)
     *       go_back
     * 
     * </pre>
     * 
     */
    public void explore(Robot robot, Location room, int direction) {
        visited.add(room);
        robot.clean();

        // (n = 0, e = 1, s = 2, w = 3)
        for (int i = 0; i < 4; i++) {

            Location nextLocation = null;

            switch (direction) {
            case 0:
                nextLocation = new Location(room.x, room.y + 1);
                break;
            case 1:
                nextLocation = new Location(room.x + 1, room.y);
                break;
            case 2:
                nextLocation = new Location(room.x, room.y - 1);
                break;
            case 3:
                nextLocation = new Location(room.x - 1, room.y);
                break;
            default:
                throw new RuntimeException();
            }

            if (!visited.contains(nextLocation) && robot.move()) {
                explore(robot, nextLocation, direction);
                goBackAndTurnAround(robot);
            }

            direction = (direction + 1) % 4;
            robot.turnRight();
        }
    }

    public void goBackAndTurnAround(Robot robot) {
        robot.turnLeft();
        robot.turnLeft();
        robot.move();
        robot.turnLeft();
        robot.turnLeft();
    }

    public void cleanRoom(Robot robot) {
        explore(robot, new Location(0, 0), 0);
    }
}