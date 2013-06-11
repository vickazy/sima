/*
	Copyright 2013 x10c-lab.com
	Authors:
		- mhd.sulhan (sulhan@x10c-lab.com)
*/

function JxSystemUser ()
{
	this.id		= "SystemUser";
	this.dir	= _g_module_dir + this.id;

	this.store	= Ext.create ("Jx.StorePaging", {
		storeId		:this.id +"Store"
	,	url			:this.dir +"/data.jsp"
	,	fields		:
		[
			"id"
		,	"name"
		,	"realname"
		,	"password"
		,	"old_password"
		]
	});

	this.panel	= Ext.create ("Jx.GridPaging", {
		id			:this.id
	,	title		:"System User"
	,	closable	:true
	,	store		:this.store
	,	columns		:
		[{
			header		:"ID"
		,	dataIndex	:"id"
		,	hidden		:true
		,	editor		:
			{
				xtype		:"textfield"
			,	hidden		:true
			}
		},{
			header		:"User ID"
		,	dataIndex	:"name"
		,	flex		:1
		,	editor		:
			{
				xtype		:"textfield"
			,	vtype		:"alphanum"
			,	allowBlank	:false
			}
		},{
			header		:"User name"
		,	dataIndex	:"realname"
		,	flex		:1
		,	editor		:
			{
				xtype		:"textfield"
			,	allowBlank	:false
			}
		},{
			header		:"Current Password"
		,	dataIndex	:"old_password"
		,	hidden		:true
		,	editor		:
			{
				xtype		:"textfield"
			,	vtype		:"alphanum"
			,	inputType	:"password"
			,	hidden		:"true"
			}
		},{
			header		:"Password"
		,	dataIndex	:"password"
		,	hidden		:true
		,	editor		:
			{
				xtype		:"textfield"
			,	vtype		:"alphanum"
			,	inputType	:"password"
			}
		}]
	});

	this.doRefresh	= function (perm)
	{
		this.panel.doRefresh (perm);
	}

};

/* moduleName = className */
var SystemUser = new JxSystemUser ();
