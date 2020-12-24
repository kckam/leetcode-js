/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
const videoStitching = function (clips, T) {
  clips.sort((a, b) => a[0] - b[0])
  if(T === 0) return 0
  let laststart = -1,
    curend = 0,
    count = 0
  for (let i = 0; i < clips.length; ) {
    if (clips[i][0] > curend) return -1
    let maxend = curend
    // while one clip's start is before or equal to current end
    while (i < clips.length && clips[i][0] <= curend) {
      maxend = Math.max(maxend, clips[i][1])
      i++
    }
    count++
    curend = maxend
    if (curend >= T) return count
  }
  return -1
}

// another

/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
const videoStitching = function (clips, T) {
  clips.sort((a, b) => a[0] - b[0])
  let res = 0
  for(let i = 0, start = 0, end = 0, len = clips.length; start < T; start = end, res++) {
    for(; i < len && clips[i][0] <= start; i++) {
      end = Math.max(end, clips[i][1])
    }
    if(start === end) return -1
  }
  return res
}

