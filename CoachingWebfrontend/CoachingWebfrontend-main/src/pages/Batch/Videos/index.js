import {
  Button, Grid, Grow, MenuItem, MenuList, Checkbox, Dialog, DialogContent,
  Paper, Typography, Popper, ClickAwayListener, InputBase, Divider,
  Menu, IconButton, RadioGroup, FormControlLabel, Radio, TextField
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import emptyImage from "../../../svgicons/emptyBatch.svg";
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  }, 
  marginLeft: 0, 
  width: '30ch',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    fontSize: 14,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '20ch',
  },
}));


const Videos = () => {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const [folder, setFolder] = React.useState(false);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  const material = [
    {
      name: 'Designing Priniples',
      icon: <FolderIcon sx={{ fontSize: 100, p: 2 }} color="primary" />,
      person: 'Vaibhav Goel',
      link: 'www.google.com',
      path_name: 'React.js',
    },
    {
      name: 'Neural Networks',
      icon: <FolderIcon sx={{ fontSize: 100, p: 2 }} color="primary" />,
      person: 'Vaibhav Goel',
      link: '',
      path_name: 'JavaScript',
    },
    {
      name: 'How to Pitch your IDEA using a Powerful Sales Tech',
      icon: <FolderIcon sx={{ fontSize: 100, p: 2 }} color="primary" />,
      person: 'Vaibhav Goel',
      link: 'www.google.com',
      path_name: 'C++',
    },
    {
      name: 'How to Start Coding | Programming for Beginners |',
      icon: <DescriptionOutlinedIcon sx={{ fontSize: 100, p: 2 }} color="primary" />,
      person: 'Vaibhav Goel',
      link: '',
      path_name: 'Python',
    },
  ]

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [importBatch, setImportBatch] = React.useState(false);


  const AddFolder = () => {
    return (
      <>
        <Dialog open={folder} maxWidth="sm" fullWidth>
          <DialogContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6">
                  Add Folder
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size="small" onClick={() => setFolder(false)}>
                  <ClearSharpIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider light />
            <Box sx={{ textAlign: 'center', my: 3, }}>
              <Typography variant="caption" width="54%" color="darkgray" display="block">
                Folder Name
              </Typography>
              <TextField
                size="small"
                variant="outlined"
                sx={{ width: '60%' }}
                placeholder="Eg: React Question Paper"
              />
            </Box>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="caption" width="50%" color="darkgray" display="block">
                category
              </Typography>
              <TextField
                size="small"
                sx={{ width: '60%' }}
                variant="outlined"
                placeholder="Eg: React Question Paper"
                select
              >
                <MenuItem>Python</MenuItem>
                <MenuItem>C++</MenuItem>
                <MenuItem>JavaScript</MenuItem>
              </TextField>
            </Box>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Button color="primary" size="large" sx={{ width: '60%' }} variant="contained">
                Add Folder
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  const [nextPage, setPage] = React.useState(false);
  const [heading, setHeading] = React.useState("");

  const ImportFromOtherBatch = () => {
    return (
      <>
        <Dialog open={importBatch} maxWidth="sm" fullWidth>
          {nextPage ? <DialogContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                  <IconButton onClick={() => { setPage(false); setHeading(""); }}><ArrowBackIcon fontSize="small" /></IconButton> Import Study Material
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size="small" onClick={() => setImportBatch(false)}>
                  <ClearSharpIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider light />
            <Box sx={{ mt: 2, mb: 1, mx: 4, borderRadius: '2px', fontSize: '1em', p: 1, textAlign: 'center', background: "#009ae014" }}>
              {heading}
            </Box>
            <Box sx={{ mb: 2, textAlign: 'center' }}>
              <img src={emptyImage} alt="empty" width="30%" />
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography variant="subtitle1" sx={{ fontSize: 16, fontWeight: 600, textAlign: 'center' }}>
                There is no study material in this batch.
              </Typography>
            </Box>
            <Divider light />
            <Box sx={{ display: "flex", alignItems: "end", p: 3 }}>
              <Button sx={{ ml: 'auto' }} variant="outlined" color="info">
                Cancel
              </Button>
              <Button sx={{ ml: 2 }} variant="contained" color="info">
                Import Selected
              </Button>
            </Box>
          </DialogContent> : <DialogContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                  Import Study Material
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size="small" onClick={() => setImportBatch(false)}>
                  <ClearSharpIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider light />
            <Box sx={{ mt: 2, mb: 1, mx: 4, borderRadius: '2px', fontSize: '1em', p: 1, textAlign: 'center', background: "#009ae014" }}>
              Select a batch to import Study Material
            </Box>
            <Box sx={{ width: 'fit-content', mb: 1, mx: 'auto' }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Box>
            <Box sx={{ mb: 5 }}>
              {["Python", "React.js", "JavaScript"].map((name, index) => (
                <Box key={index} onClick={() => { setHeading(name); setPage(true); }} sx={{ mx: 4, borderTop: 1, borderColor: '#cdcdcd', py: 2, display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ mr: 'auto', fontSize: '1em' }}>
                    {name}
                  </Box>
                  <Box sx={{ ml: 'auto' }}>
                    <ArrowForwardIosIcon color="disabled" fontSize="medium" />
                  </Box>
                </Box>
              ))}
            </Box>
          </DialogContent>}
        </Dialog>
      </>
    )
  }

  const [video, setVideo] = React.useState(false);

  const AddVideos = () => {
    return (
      <>
        <Dialog open={video} maxWidth="sm" fullWidth>
          <DialogContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6">
                  Add Videos
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size="small" onClick={() => setVideo(false)}>
                  <ClearSharpIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider light />
            <Box sx={{ pt: 6, pb: 2, width: 400, mx: 'auto' }}>
              <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1 }}>
                Enter or paste link
              </Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                color="info"
                placeholder="Eg:https://www.youtube.com/watch?v=sdfsdfadgga"
              />
            </Box>
            <Box sx={{ textAlign: "center", my: 4, pb: 2 }}>
              <Button
                color="info"
                variant="contained"
                sx={{ width: 400 }}
              >
                Check Video
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <>
      <Grid container columnSpacing={{ md: 2, lg: 3, xl: 4 }}>
        <Grid item xs={12} md={6} lg={8}>
          <Box sx={{ display: 'flex', aligntItems: 'center', mt: 4, mb: 3, mx: 2 }}>
            <Box sx={{ mr: 'auto' }}>
              <Typography variant="h5">
                Videos
              </Typography>
            </Box>
            <Box sx={{ ml: 'auto' }}>
              <Button
                ref={anchorRef}
                color="primary"
                size="small"
                variant="contained"
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                Add <ArrowDropDownIcon sx={{ marginLeft: 2 }} />
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={(event) => { setFolder(true); handleClose(event); }}>
                            <CreateNewFolderOutlinedIcon sx={{ mr: 1 }} color="disabled" /> New Folder
                          </MenuItem>
                          <MenuItem onClick={(event) => { setVideo(true); handleClose(event); }}>
                            <SlowMotionVideoIcon sx={{ mr: 1 }} color="disabled" /> New Video
                          </MenuItem>
                          <MenuItem onClick={(event) => { setImportBatch(true); handleClose(event); }}>
                            <LogoutOutlinedIcon sx={{ mr: 1 }} color="disabled" /> Import From Other Batch
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', aligntItems: 'center', mt: 4, mb: 1, mx: 2 }}>
            <Box sx={{ mr: 'auto' }}>
              <Typography color="gray" variant="subtitle1">
                TOTAL (4)
              </Typography>
            </Box>
            <Box sx={{ ml: 'auto' }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon fontSize="small" color="disabled" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search Videos"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Box>
          </Box>
          <Box sx={{ mb: 5 }}>
            <Paper>
              <Box sx={{ p: 3, mx: 3 }}>
                {material.map((data, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 3, borderBottom: 1, pb: 3, borderColor: '#cdcdcd' }}>
                    <Box sx={{ p: 3 }} >
                      {data.icon}
                    </Box>
                    <Box>
                      <Typography display="block" variant="h6">
                        {data.name}
                      </Typography>
                      <Typography variant="body2" color="gray">
                        {data.person}
                      </Typography>
                      <Typography variant="caption" color="blue">
                        {data.link}
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 'auto' }}>
                      <IconButton
                        aria-label="more"
                        id={'long-button' + index}
                        aria-controls={"long-menu" + index}
                        aria-expanded={openMenu ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id={"long-menu" + index}
                        MenuListProps={{
                          'aria-labelledby': 'long-button' + index,
                        }}
                        elevation={1}
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleCloseMenu}
                      >
                        <MenuItem onClick={handleCloseMenu}>
                          <EditIcon sx={{ mr: 2 }} /> Edit Link
                        </MenuItem>
                        <MenuItem onClick={handleCloseMenu}>
                          <DeleteIcon sx={{ mr: 2 }} /> Delete
                        </MenuItem>
                      </Menu>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ pb: 2, mt: 12 }}>
            <Typography color="gray" variant="subtitle2">
              SORT BY
            </Typography>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Paper>
              <Box sx={{ px: 3, py: 2 }}>
                <RadioGroup
                  aria-label="gender"
                  defaultValue="Recently Added"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="Recently Added" control={<Radio color="default" size="small" />} label="Recently Added" />
                  <FormControlLabel value="Name" control={<Radio color="default" size="small" />} label="Name" />
                </RadioGroup>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Box sx={{ pb: 3, mt: 12 }}>
              <Typography color="gray" variant="body2">
                FILTER BY
              </Typography>
            </Box>
            <Paper>
              <Box sx={{ px: 3, py: 2 }}>
                <Checkbox size="small" /> Python <br />
                <Checkbox size="small" /> C++ <br />
                <Checkbox size="small" /> React.js <br />
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid >
      {folder && AddFolder()}
      {importBatch && ImportFromOtherBatch()}
      {video && AddVideos()}
    </>
  )
}

export default Videos;